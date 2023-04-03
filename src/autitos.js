function superficiePlana(dimension) {
  if(dimension=="") return "ingrese una cadena valida";
  if(dimension.length == 1)  return "la dimension necesita tener 2 valores ej; 2,2";
  if(dimension[0] != dimension[2]) return "ingrese una dimension cuadrada";
  else return dimension
}

export default superficiePlana;
