import {avanceFinal} from "./autitos.js";

const posInicial = document.querySelector("#posicionInicial");
const comandos = document.querySelector("#comandos");
const limites = document.querySelector("#limites");
const form = document.querySelector("#dimension-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + avanceFinal(posInicial.value,comandos.value, limites.value) + "</p>";

});
