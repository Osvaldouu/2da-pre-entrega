
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
