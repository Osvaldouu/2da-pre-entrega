
//catalogos//

alert("¿Qué desea comprar?");

let articulos = parseInt(
  prompt("1-Manzana  2-Pera \n 3-Uva  4-Kiwi \n 5-Durazno  6-Banana \n ")
);
// console.log (articulos + "manzana");

let kilos = null;

switch (articulos) {
  case 1:
    articulos = 1;
    console.log("Manzana");
    let m = prompt(
      "¿Cuanto kilos desea?\n $550 el kilo \n 1-kilo 2-kilos\n 3-kilos 4-kilos\n"
    );
    kilos = m;
    break;
  case 2:
    articulos = 2;
    console.log("Pera");
    let p = prompt(
      "¿Cuanto kilos desea?\n $300 el kilo \n 1-kilo 2-kilos\n 3-kilos 4-kilos\n"
    );
    kilos = p;
    break;
  case 3:
    articulos = 3;
    console.log("Uva");
    let u = prompt(
      "¿Cuanto kilos desea?\n $100 el kilo \n 1-kilo 2-kilos\n 3-kilos 4-kilos\n"
    );
    kilos = u;
    break;
  case 4:
    articulos = 4;
    console.log("Kiwi");
    let k = prompt(
      "¿Cuanto kilos desea?\n $3000 el kilo \n 1-kilo 2-kilos\n 3-kilos 4-kilos\n"
    );
    kilos = k;
    break;
  case 5:
    articulos = 5;
    console.log("Durazno");
    let d = prompt(
      "¿Cuanto kilos desea?\n $265 el kilo \n 1-kilo 2-kilos\n 3-kilos 4-kilos\n"
    );
    kilos = d;
    break;
  case 6:
    articulos = 6;
    console.log("Banana");
    let b = prompt(
      "¿Cuanto kilos desea?\n $430 el kilo \n 1-kilo 2-kilos\n 3-kilos 4-kilos\n"
    );
    kilos = b;
    break;
  default:
    alert("error, reiniciar pagina");
}

// let precioManzana = 550;
// let precioPera = 300;
// let precioUva = 100;
// let precioKiwi = 3000;
// let precioDurazno = 265;
// let precioBanana = 430;

let precios = {
  manzana: 550,
  pera: 300,
  uva:100,
  kiwi:3000,
  durazno:265,
  banana:430
};
function precioFinal(nombre, kilo, articulo, precios){ 
  let producto = null;
  let precioFinal = 0;

  if (articulo === 1) {    
    producto = "Manzana"
    precioFinal = 550 
  }else if(articulo === 2) {    
    producto = "Pera"
    precioFinal = 300  
  } else if(articulo === 3){
    producto = "Uva"
    precioFinal = 100
  } else if(articulo === 4){
    producto = "Kiwi"
    precioFinal = 3000
  } else if (articulo === 5){
    producto = "Durazno"
    precioFinal = 265
  } else if(articulo === 6){
    producto = "Banana"
    precioFinal = 430
  } else{
    alert("error, reiniciar pagina")
  }

  

  alert(`Nombre del comprador: ${nombre}\n Producto: ${producto}\n kilos: ${kilo}\n Precio final: $${precioFinal * kilo}`)
}  
    
    precioFinal(name, kilos, articulos, precios)

  

  