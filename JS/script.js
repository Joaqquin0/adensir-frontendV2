document.addEventListener("DOMContentLoaded", async () => {
    const clientId = crypto.randomUUID();  // Genera un ID único para el cliente

    const tokenResponse = await fetch("http://localhost:3000/api/get-token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientId }),
    });

    if (!tokenResponse.ok) {
        throw new Error("Error al obtener el token");
    }

    const { token } = await tokenResponse.json();

    if (!token) {
        console.error("Token no encontrado en la respuesta");
        return;
    }

    // Almacenar el token globalmente
    window.token = token;

    document.querySelector(".donar-btn").addEventListener("click", async () => {
        const monto = document.querySelector("#donacionMonto").value;
        const tipoDonacion = document.querySelector('input[name="tipoDonacion"]:checked').value;
        const frecuencia = tipoDonacion === 'suscripcion' ? document.querySelector("#frecuencia").value : null;

        if (!monto || monto <= 0) {
            alert("Por favor ingrese un monto válido.");
            return;
        }

        const productId = tipoDonacion === 'unica' ? "prod_Rbv0ypbBXRpIvo" : "prod_Rbv0Z5cGmo2h9l"; // Según el tipo de donación

        // Llamar al backend para crear el precio
        try {
            const response = await fetch("http://localhost:3000/api/new-price", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${window.token}`,  // Usa el token previamente guardado
                },
                body: JSON.stringify({ monto, tipoDonacion, productId, frecuencia }), // Enviar frecuencia si es suscripción
            });

            if (!response.ok) {
                throw new Error("Error al crear el precio personalizado");
            }

            const { priceId } = await response.json();

            // Ahora redirigir al checkout con el priceId
            const checkoutUrl = await iniciarCheckout(priceId);
            window.location.href = checkoutUrl; // Redirigir al checkout de Stripe
        } catch (error) {
            console.error("Error al procesar la donación:", error);
        }
    });

    // Añadir event listeners para ocultar el div cuando se hace clic en los botones
    document.getElementById("show-one-time").addEventListener("click", () => {
        document.querySelector(".container-donar-personalizado").style.display = "none";
    });

    document.getElementById("show-subscription").addEventListener("click", () => {
        document.querySelector(".container-donar-personalizado").style.display = "none";
    });

    const oneTimeButton = document.getElementById("show-one-time");
    const subscriptionButton = document.getElementById("show-subscription");

    oneTimeButton.addEventListener("click", () => {
        oneTimeButton.classList.add("selected");
        subscriptionButton.classList.remove("selected");
    });

    subscriptionButton.addEventListener("click", () => {
        subscriptionButton.classList.add("selected");
        oneTimeButton.classList.remove("selected");
    });

    const unicaCheckbox = document.getElementById("unica");
    const suscripcionCheckbox = document.getElementById("suscripcion");
    const frecuenciaSelect = document.getElementById("frecuenciaSuscripcion");

    unicaCheckbox.addEventListener("change", () => {
        if (unicaCheckbox.checked) {
            frecuenciaSelect.style.display = "none";
            suscripcionCheckbox.checked = false;
        }
    });

    suscripcionCheckbox.addEventListener("change", () => {
        if (suscripcionCheckbox.checked) {
            frecuenciaSelect.style.display = "block";
            unicaCheckbox.checked = false;
        }
    });

});

// Función para iniciar la sesión de checkout
const iniciarCheckout = async (priceId) => {
    try {
        const response = await fetch("http://localhost:3000/api/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${window.token}`, // Usa el token guardado
            },
            body: JSON.stringify({ priceId }),
        });

        if (!response.ok) {
            throw new Error("Error al crear la sesión de checkout");
        }

        const { url } = await response.json();
        return url;

    } catch (error) {
        console.error("Error al redirigir al checkout:", error);
        return null;
    }
};
