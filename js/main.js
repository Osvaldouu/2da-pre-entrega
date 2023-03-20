
//catalogos//

const articulos = [
   {
    nombre:"manzana",
    precio:550,
    articulo:"fruta"
   },
   {
    nombre:"pera",
    precio:300,
    articulo:"fruta"
   },
   {
    nombre:"uva",
    precio:100,
    articulo:"fruta"
   },
   {
    nombre:"kiwi",
    precio:3000,
    articulo:"fruta"
   },
   {
    nombre:"durazno",
    precio:265,
    articulo:"fruta"
   },
   {
    nombre:"banana",
    precio: 430,
    articulo:"fruta"
   }
];

  document.getElementById("mostrar").addEventListener("click", function(){
     const nombre = document.getElementById("name").value.toLowerCase();
     const productos = articulos.find (productos => productos.nombre === nombre)
     if (productos){
      alert( `el articulo: es: ${nombre}, su valor es: ${productos.precio} `)
     }else{
      alert("fruta o verdura no encontrada")
     }
  })

   const inputFilter= document.getElementById("search");
  
  