function coordenadaInicial(coordenada) {
    if(coordenada=="") return "Ingrese una cadena valida";
    if(isNaN(coordenada[0])||isNaN(coordenada[2])) return "Ingrese una coordenada valida. Ej: 1,2";
    if(!isNaN(coordenada[3])) return "Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)";
    if(coordenada[3] == "N" && coordenada[3] == "E" && coordenada[3] == "O" && coordenada[3] == "S") {}
    else return "Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)";
  }

  export default coordenadaInicial;