//header//
const nav= document.getElementById ("nav")
const abrir = document.getElementById ("abrir")
const cerrar = document.getElementById ("cerrar")


abrir.addEventListener ("click", () =>{
   nav.classList.add("visible");
})

cerrar.addEventListener ("click", ()=>{
   nav.classList.remove("visible")
})

//-------------carrousel------------//

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
     delay: 4000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
//---------modal-------------//
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



//---------------- cards--------------//
const productContainer = document.getElementById("productos")

const cardVerduras = [
  {id:1, name:"FRUTAS", img:"./img/card1.jpg"},
  {id:2, name:"VERDURAS", img:"./img/card2.jpg"},
  {id:3, name:"VERDEOS FRESCOS", img:"./img/card3.jpg"}
]

cardVerduras.forEach((cards)=>{
  const div = document.createElement ("div")
  div.classList.add ("cards")
  div.innerHTML = `
  <img src="${cards.img}" alt="${cards.name}">
  <h3 class="text-card" id="nombre-catalogo">${cards.name}</h3>
  
  `
  
  productContainer.appendChild(div)
})




//---------------------- swpiter productos---------------------//

const swiperProducts = new Swiper('.swiper-product', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
     delay: 2000,
  },
});

