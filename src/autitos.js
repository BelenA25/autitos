let matriz = [[]];

function superficiePlana(dimension) {
  if(dimension=="") return "Ingrese una cadena valida";
  if(dimension.length == 1)  return "La dimension necesita tener 2 valores ej; 2,2";
  if(dimension[0] != dimension[2]) return "Ingrese una dimension cuadrada";
  else{
    matriz = crearMatriz(parseInt(dimension[0]));
    return dimension;
  }
}

function crearMatriz(n) {
  const matriz = [];
  for (let i = 0; i < n; i++) {
    matriz.push(Array(n).fill(0));
  }
  return matriz;
}

export default superficiePlana;
