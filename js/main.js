
//catalogos//

const productContainer = document.getElementById ("productos")

const productCard = [
   {id:1, name:"Tomate Perita", Precio: 350, Presentacion: "Kilos", img: "../img/producto1.jpg"},
   {id:2, name:"Anquin", Precio: 250, Presentacion: "Kilos", img: "../img/producto2.jpg"},
   {id:3, name:"Pimiento Rojo", Precio: 650, Presentacion: "Kilos", img: "../img/producto3.jpg"},
   {id:4, name:"Durazno", Precio: 950, Presentacion: "Kilos", img: "../img/producto4.jpg"},
   {id:5, name:"Pera", Precio: 350, Presentacion: "Kilos", img: "../img/producto5.jpg"},
   {id:6, name:"Uva Blanca", Precio: 650, Presentacion: "Kilos", img: "../img/producto6.jpg"},
   {id:7, name:"Acelga", Precio: 80, Presentacion: "Atado", img: "../img/producto7.jpg"},
   {id:8, name:"Zapallito Verde", Precio: 180, Presentacion: "Kilos", img: "../img/producto8.jpg"},
   {id:9, name:"Rucula", Precio: 80, Presentacion: "Atado", img: "../img/producto9.jpg"},
   {id:10, name:"Palta", Precio: 2700, Presentacion: "Kilos", img: "../img/producto10.jpg"},
   {id:11, name:"Cebolla", Precio: 180, Presentacion: "Kilos", img: "../img/producto11.jpg"},
   {id:12, name:"Berenjena", Precio: 250, Presentacion: "Kilos", img: "../img/producto12.jpg"},
   {id:13, name:"Batata", Precio: 350, Presentacion: "Kilos", img: "../img/producto13.jpg"},
   {id:14, name:"Pepino", Precio: 250, Presentacion: "Kilos", img: "../img/producto14.jpg"},
   {id:15, name:"Limon", Precio: 180, Presentacion: "Kilos", img: "../img/producto15.jpg"},
   {id:16, name:"Perejil", Precio: 80, Presentacion: "Atado", img: "../img/producto16.jpg"}

]

productCard.forEach ((prod) =>{
   const div = document.createElement("div")
   div.classList.add ("prod-cards")
   div.innerHTML = `
    <img src="${prod.img}" alt="${prod.name}">  
    <p class="precio-producto">$ ${prod.Precio}</p>
    <p class="p-product">${prod.Presentacion}</p>
    <h3 class="name-product">${prod.name}</h3>

    <button class="b-product  btn-41">Agregar al Carrito</button>
   ` 
   productContainer.appendChild (div)
})