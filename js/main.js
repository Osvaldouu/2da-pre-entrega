//button//

const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

// modal //
var openBtn = document.getElementById("btn-abrir-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", showModal);
function showModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
//catalogos//
let carrito = [];

const url = "../data.json";
fetch(url)
  .then((repuesta) => {
    return repuesta.json();
  })
  .then((data) => {
    const productos = data;
    renderProducto(productos);
  });

function renderProducto(prod) {
  const card = document.querySelector("#productos");
  prod.forEach((objeto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("prod-cards");
    tarjeta.innerHTML += `
    <img src="${objeto.img}" alt="${objeto.name}">
    <p class="precio-producto">$ ${objeto.precio}</p>
    <p class="p-product">${objeto.presentacion}</p>
    <h3 class="name-product">${objeto.name}</h3>
    
    <button id="agregar${objeto.id}" class="b-product btn-41" >Agregar al Carrito</button>
    `;
    card.appendChild(tarjeta);

    const btnAgregar = document.querySelector(`#agregar${objeto.id}`);
    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(objeto);
    });
  });
}

function agregarAlCarrito(producto) {
  let existe = carrito.some((prod) => prod.id === producto.id);
  let prodFind = carrito.find((prod) => prod.id === producto.id);
  existe === false ? (producto.cantidad = 1) : prodFind.cantidad++;
  existe || carrito.push(producto);

  mostrarCarrito(producto);
  // actualizarCarrito()
  console.log(producto);
}

function mostrarCarrito(arr) {
  const carritoContent = document.querySelector(".modal-body");
  carritoContent.innerHTML = "";

  for (const prod in arr) {
    const { id, name, precio, presentacion, img, kilos } = arr;
    const div = document.createElement("div");
    div.classList.add("carritoRelleno");
    div.innerHTML = `
        <img src="${img}"alt="${name}">
        <p>${name}</p>
        <p>${precio}</p>
        <p>${presentacion}</p>
        <p>${kilos}</p>
      `;

    carritoContent.appendChild(div);
  }
}

// function actualizarCarrito() {
//   const modalContenido = document.querySelector("modal-contenido");
//   // modalContenido.innerHTML = '';

//   carrito.forEach ((prod)=>{
//     const rellenoModal = document.createElement ('div')
//     rellenoModal.classList.add('carritoRelleno');
//     rellenoModal.innerHTML = `
//       <p>${prod.name}</p>
//       <p>${prod.precio}</p>
//       <img src="${prod.img}"alt="${prod.name}">
//     `;

//     modalContenido.appendChild(rellenoModal);
//   });
// }
