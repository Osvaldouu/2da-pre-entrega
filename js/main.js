
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
const openBtn = document.getElementById("btn-abrir-modal");
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
const btnBorrar = document.querySelector ("#btn-borrar-todo")

//catalogos//

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


const url = "../data.json";
fetch(url)
  .then((repuesta) => {
    return repuesta.json();
  })
  .then((data) => {
    const productos = data;
    renderProducto(productos);
    actualizarModal();
    actualizarContadorBoton();
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
    <p class="p-categoria">${objeto.categoria}</p>
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
  const productoExistente = carrito.find((p) => p.id === producto.id);
  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarModal();
  actualizarContador();
  calcularTotal();
  actualizarContadorBoton();
  
}

function actualizarContadorBoton() {
  const contador = document.querySelector("#counter");
  const filas = document.querySelectorAll(".modal-body .carritoRelleno");
  contador.textContent = filas.length;
}

function actualizarModal() {
  const carritoContent = document.querySelector(".modal-body");
  carritoContent.innerHTML = "";

  for (const producto of carrito) {
    const { id, name, precio, presentacion, img, cantidad } = producto;
    const div = document.createElement("div");
    div.classList.add("carritoRelleno");
    div.innerHTML = `
      <img src="${img}" alt="${name}">
      <p>${name}</p>
      <p>$${precio}</p>
      <span id="contador-carrito">cantidad: ${cantidad}</span>
      <button class="boton-borrar" onclick="eliminarProducto(${id})">Eliminar Producto</button>
    `;
    carritoContent.appendChild(div);

  }
}
function actualizarContador() {
  const contadorCarrito = document.querySelector(".contador-carrito");
  let cantidadTotal = 0;
  for (const producto of carrito) {
    cantidadTotal += producto.cantidad;
  }
}


function eliminarProducto(productoID) {
  carrito = carrito.filter((producto) => producto.id !== productoID);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarModal();
  actualizarContador();
  calcularTotal(); 
  actualizarContadorBoton();
}

function vaciarModal() {
    const carritoContent = document.querySelector(".modal-body");
    carritoContent.innerHTML = "";
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
    calcularTotal(); 
    actualizarContadorBoton();
}

function comprar() {
  if (carrito.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No hay productos en el carrito'
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada',
      text: 'Gracias por su compra'
    }).then(() => {
      carrito = [];
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarModal(); 
      actualizarContador();
      calcularTotal();
      actualizarContadorBoton()
    });
  }
}

function calcularTotal() {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio * producto.cantidad;
  }
  const totalProducto = document.querySelector('#totalProducto');
  const spanTotal = totalProducto.querySelector('span');
  spanTotal.innerHTML = `${total.toFixed(2)}`;
}



