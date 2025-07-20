async function loadProducts(tipo) {
  const $grupo1 = document.getElementById("grupo1");
  const $grupo2 = document.getElementById("grupo2");
  const $template = document.getElementById("donacion-template").content;
  const $fragment1 = document.createDocumentFragment();
  const $fragment2 = document.createDocumentFragment();
  try {
    const response = await fetch("http://localhost:3000/api/products");
    const products = await response.json();
    // Filtrar productos según el tipo
    const filteredProducts = products.filter(product => {
      const isCorrectType = tipo === "unica" ? !isSubscription(product) : isSubscription(product);
      const excludedPrices = [100, 1000, 2000]; // Precios en centavos (1, 10 y 20 euros)
      return isCorrectType && !excludedPrices.includes(product.price);
    });
    filteredProducts.forEach((product, index) => {
      // Asigna el ID del precio al contenedor de donación
      $template.querySelector(".donacion").setAttribute("data-price", product.default_price_id);
      // Actualiza el contenido de la clase .precio
      $template.querySelector(".precio").textContent = `${(product.price / 100).toFixed(2)} € `;
      // Asigna una clase de color específica
      const donacionDiv = $template.querySelector(".donacion");
      donacionDiv.classList.remove("donacion-10", "donacion-20", "donacion-30");
      if (index % 3 === 0) {
        donacionDiv.classList.add("donacion-10");
      } else if (index % 3 === 1) {
        donacionDiv.classList.add("donacion-20");
      } else {
        donacionDiv.classList.add("donacion-30");
      }
      // Clona el template y lo añade al fragmento correspondiente
      const $clone = document.importNode($template, true);
      if (donacionDiv.classList.contains("donacion-30")) {
        $fragment2.appendChild($clone);
      } else {
        $fragment1.appendChild($clone);
      }
    });
    // Limpia los contenedores antes de añadir los productos filtrados
    $grupo1.innerHTML = '';
    $grupo2.innerHTML = '';
    $grupo1.appendChild($fragment1);
    $grupo2.appendChild($fragment2);
    // CREACION DEL BOTON OTRA CANTIDAD
    const $input = document.createElement("input");
    $input.id = "donacionMonto";
    $input.type = "number";
    $input.min = 1;
    $input.step = "any";
    $input.placeholder = "otra cantidad";
    $input.className = "s4";
    $grupo2.appendChild($input); // Añade el botón al final del contenedor
    // Mostrar el div personalizado al ingresar un valor en el campo de entrada con la clase s4
    $input.addEventListener("input", (e) => {
      const monto = e.target.value;
      if (monto && monto > 0) {
        document.querySelector("#donacionMonto").value = monto;
        document.querySelector(".container-donar-personalizado").style.display = "block";
        document.querySelector(".container-buttons-donacion-tipo").style.display = "none";
      } else {
        document.querySelector(".container-donar-personalizado").style.display = "none";
        document.querySelector(".container-buttons-donacion-tipo").style.display = "flex";

      }
    });
  } catch (error) {
    $donaciones.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function isSubscription(product) {
  return product.recurring !== null;
}

// Escucha clics en los elementos de donación
document.addEventListener("click", async (e) => {
  if (e.target.closest(".donacion")) {
    const priceId = e.target.closest(".donacion").getAttribute("data-price");
    if (!priceId) {
      console.error("priceId no encontrado");
      return;
    }
    try {
      const clientId = crypto.randomUUID(); // Genera un ID único para el cliente
      // Obtén el token desde la API
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
      // Crea una sesión de checkout en Stripe
      const checkoutResponse = await fetch("http://localhost:3000/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ priceId }),
      });
      if (!checkoutResponse.ok) {
        throw new Error("Error al crear la sesión de checkout");
      }
      const { url } = await checkoutResponse.json();
      window.location.href = url; // Redirige al checkout de Stripe
    } catch (error) {
      console.error("Error al procesar la donación:", error);
    }
  }
});

// Cargar productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  loadProducts("suscripcion"); // Cargar productos de pago único por defecto
});

// Agregar eventos de clic a los botones
document.getElementById("show-one-time").addEventListener("click", () => {
  loadProducts("unica");
});
document.getElementById("show-subscription").addEventListener("click", () => {
  loadProducts("suscripcion");
});