//int [][] ventas = new int[4][6];

function superficiePlana(dimension) {
  if(dimension=="") return "Ingrese una cadena valida";
  if(dimension.length == 1)  return "La dimension necesita tener 2 valores ej; 2,2";
  if(dimension[0] != dimension[2]) return "Ingrese una dimension cuadrada";
  else return dimension
}

export default superficiePlana;
