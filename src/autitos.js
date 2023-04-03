function superficiePlana(dimension) {
  if(dimension=="") return 0;
  if(dimension.length == 1)  return convertirANumero(dimension);
  if(dimension[0] != dimension[2]) return 0;
  else return convertirANumero(dimension[0])
}

function convertirANumero(numero){
  return parseInt(numero);
}


export default superficiePlana;
