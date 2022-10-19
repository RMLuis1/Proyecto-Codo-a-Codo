let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

// btnSiguiente.addEventListener("click", () => {
//   if (pagina < 30) {
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
    //paginado------------------------------
var current_page = 1;
var obj_per_page = 4;
const indexUltimo = current_page * obj_per_page; //4
  const indexPrimer =indexUltimo-obj_per_page
let totNumPages=datos.slice(indexPrimer,indexUltimo);

console.log(totNumPages)

btnAnterior.addEventListener("click", () => {
if (current_page > 1) {
  current_page--;
  // console.log(current_page--)
  change(current_page);
}
})
   btnSiguiente.addEventListener("click", () => {
  if (current_page < totNumPages) {
    current_page++;
    // console.log(current_page++)
    change(current_page);
  }
})
const change=(page)=>{
 if (page < 1) page = 1;
 if (page > totNumPages) page = totNumPages;
 
 for (var i = (page - 1) * obj_per_page; i < page * obj_per_page; i++) {
    let products = "";
    console.log("esto seria i",i)
    datos[i].forEach((productos) => {
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
change()
    document.getElementById("divProductos").innerHTML = products;
 }

}

    // -----------------------------
      // let products = "";
      // datos.forEach((productos) => {
      //   products += `
			// 		<div class="productos">
			// 			<img class="poster" src=${productos.image}>
			// 			<h2 class="price">$${productos.price}</h3>
			// 			<h3 class="titulo">${productos.title}</h3>
      //                   <span class="lineTop"></span>
      //                   <span class="lineLeft"></span>
			// 		</div>
			// 	`;
      // });

      // document.getElementById("divProductos").innerHTML = products;
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
