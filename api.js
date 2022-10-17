let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

// btnSiguiente.addEventListener("click", () => {
//   if (pagina < 1000) {
//     pagina += 1;
//     cargarProductos();
//   }
// });

// btnAnterior.addEventListener("click", () => {
//   if (pagina > 1) {
//     pagina -= 1;
//     cargarProductos();
//   }
// });

const cargarProductos = async () => {
  try {
    const respuesta = await fetch(
      `https://fakestoreapi.com/products`
    );

    console.log(respuesta);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos)

      let products = "";
      datos.forEach((productos) => {
        products += `
					<div class="productos">
						<img class="poster" src=${productos.image}>
						<h2 class="price">$${productos.price}</h3>
						<h3 class="titulo">${productos.title}</h3>
                        <span class="lineTop"></span>
                        <span class="lineLeft"></span>
					</div>
				`;
      });

      document.getElementById("divProductos").innerHTML = products;
    } else if (respuesta.status === 401) {
      console.log("Pusiste la llave mal");
    } else if (respuesta.status === 404) {
      console.log("La productos que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};



cargarProductos();
