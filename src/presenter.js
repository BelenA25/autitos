import {avanceFinal} from "./autitos.js";

let cadena = document.querySelector("#cadena");
const form = document.querySelector("#dimension-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let comandos = cadena.value.split("/");
  if(comandos.length == 1)
  {
    alert("Escriba los comandos siguiendo el formato: 5,5/1,2N/IAIAIAIAA, separando por barras");
  }
  else
  {
    div.innerHTML = "<p>" + avanceFinal(comandos[0],comandos[1], comandos[2]) + "</p>";

  }
  
});
