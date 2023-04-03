function superficiePlana(dimension) {
  if(dimension=="") return "ingrese una cadena valida";
  if(dimension.length == 1)  return "la dimension necesita tener 2 valores ej; 2,2";
  if(dimension[0] != dimension[2]) return 0;
  else return convertirANumero(dimension[0])
}

function convertirANumero(numero){
  return parseInt(numero);
}


export default superficiePlana;
