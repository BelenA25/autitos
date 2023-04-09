function coordenadaInicial(coordenada) {
    if(coordenada=="") return "Ingrese una cadena valida";
    if(isNaN(coordenada[0])) return "Ingrese una coordenada valida. Ej: 1,2";
  }

  export default coordenadaInicial;