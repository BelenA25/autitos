let matriz = [[]];

class Auto{
  constructor(orientacion){

    this.orientacion=orientacion;
  }
  MirarIzquierda(orientacion) {
    if(orientacion==="N"){
      this.orientacion ="O"
    }
    if(orientacion==="E"){
      this.orientacion ="N"
    }
    if(orientacion==="S"){
      this.orientacion ="E"
    }
    if(orientacion==="O"){
      this.orientacion ="S"
    }
  }
  MirarDerecha(orientacion) {
    if(orientacion==="N"){
      this.orientacion ="E"
    }
    if(orientacion==="E"){
      this.orientacion ="S"
    }
    if(orientacion==="S"){
      this.orientacion ="O"
    }
    if(orientacion==="O"){
      this.orientacion ="N"
    }
  }
  agregarOrientacion(orientacion){
    this.orientacion = orientacion;
  }
  

}
const auto = new Auto(null); 

export default function superficiePlana(dimension) {
  if(dimension=="") return "Ingrese una cadena valida";
  if(dimension.length == 1)  return "La dimension necesita tener 2 valores ej; 2,2";
  if(dimension[0] != dimension[2]) return "Ingrese una dimension cuadrada";
  else
  {
    matriz = crearMatriz(parseInt(dimension[0]));
    return dimension;
  }
}

function crearMatriz(n) {
  const matriz = [];
  for (let i = 0; i < n; i++) {
    matriz.push(Array(n).fill(auto));
  }
  return matriz;
}

export  function coordenadaInicial(coordenada) {
  if(coordenada=="") return "Ingrese una cadena valida";
  if(isNaN(coordenada[0])||isNaN(coordenada[2])) return "Ingrese una coordenada valida. Ej: 1,2";
  if(!isNaN(coordenada[3])) return "Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)";
  if(coordenada[3] == "N" && coordenada[3] == "E" && coordenada[3] == "O" && coordenada[3] == "S") {

    auto.agregarOrientacion(coordenada[3])
    matriz[coordenada[0]][coordenada[2]] ===  auto
  }
  else return "Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)";
}

export  function comandos(comando){
  if (comando === "I") {
      return "I"
  }
  if (comando === "D") {
      return "D"
  }
  if (comando === "A") {
      return "A"
  }
  else{
      return "Ingrese un comando valido"
  }
}
export  function validarSecuencia(secuencia) {
  let secuenciaValida = "";
  
  for(let i = 0; i < secuencia.length; i++) {
    let comandoActual = secuencia[i];
    let resultado = comandos(comandoActual);
    
    if(resultado === "Ingrese un comando valido") {
      throw new Error(resultado);
    }
    
    secuenciaValida += resultado;
  }
  
  return secuenciaValida;
}

export function posicionFinal(posicion) {


}



 