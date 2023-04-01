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

//----------------------------------------------------//
const miInput = document.querySelectorAll("#input");
const valor = miInput.value;

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const botonFormulario = document.querySelector("#btn");
botonFormulario.addEventListener("click", () => {
 for (let i = 0; i < miInput.length; i++){
     if (miInput[i].value.length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Rellenar los campo',
          })
     }else {
         miInput[i].value = ""
         Swal.fire({
            icon: 'success',
            title: 'Consulta Enviada con Exíto',

          })
     }
    };
    
});
 