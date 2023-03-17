
//alert("Bienvenidos a la Verduleria Tomato!");

//let name = prompt("Ingresa tu nombre");

// while (name.length === 0) {
//   name = prompt("Ingresa tu nombre");
// }


//-------------carrousel------------//

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


//---------------- cards--------------//
const productContainer = document.getElementById("productos")

const cardVerduras = [
  {id:1, name:"Frutas", img:"./img/card1.jpg"},
  {id:2, name:"Verduras", img:"./img/card2.jpg"},
  {id:3, name:"Verdeos Frescos", img:"./img/card3.jpg"}
]

cardVerduras.forEach((cards)=>{
  const div = document.createElement ("div")
  div.innerHTML = `
  <img src="${cards.img}" alt="">
  <h3>${cards.name}</h3>
  <button id="">Catalogo</button>
  `
  
  productContainer.appendChild(div)
})

