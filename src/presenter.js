import superficiePlana from "./autitos.js";

const dimension = document.querySelector("#dimension");
const form = document.querySelector("#dimension-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  div.innerHTML = "<p>" + superficiePlana(dimension.value) + "</p>";
});
