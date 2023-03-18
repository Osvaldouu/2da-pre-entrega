
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
  {id:1, name:"FRUTAS", img:"./img/card1.jpg"},
  {id:2, name:"VERDURAS", img:"./img/card2.jpg"},
  {id:3, name:"VERDEOS FRESCOS", img:"./img/card3.jpg"}
]

cardVerduras.forEach((cards)=>{
  const div = document.createElement ("div")
  div.classList.add ("cards")
  div.innerHTML = `
  <img src="${cards.img}" alt="${cards.name}">
  <h3 class="text-card">${cards.name}</h3>
  
  <button class="buton-card" id="">Catalogo</button>
  `
  
  productContainer.appendChild(div)
})

