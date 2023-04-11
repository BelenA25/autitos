let matriz = [[]];

class Auto{
  constructor(posicionInicial){
    this.posicionInicial = posicionInicial;
    this.orientacion=posicionInicial[3];
    this.posicionActual = posicionInicial;
  }
  MirarIzquierda() {
    if(this.orientacion==="N"){
      this.orientacion ="O"
    }
    if(this.orientacion==="E"){
      this.orientacion ="N"
    }
    if(this.orientacion==="S"){
      this.orientacion ="E"
    }
    if(this.orientacion==="O"){
      this.orientacion ="S"
    }
  }
  MirarDerecha() {
    if(this.orientacion==="N"){
      this.orientacion ="E"
    }
    if(this.orientacion==="E"){
      this.orientacion ="S"
    }
    if(this.orientacion==="S"){
      this.orientacion ="O"
    }
    if(this.orientacion==="O"){
      this.orientacion ="N"
    }
  }
  avanzar(){
    if(this.orientacion==="N"){
      let y = parseInt(this.posicionActual[2]) + 1;
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + y.toString() + this.posicionActual[3];
    }
    if(this.orientacion==="E"){
      let x = parseInt(this.posicionActual[0]) + 1;
      this.posicionActual = x.toString() + this.posicionActual[1] + this.posicionActual[2]+this.posicionActual[3];
    }
    if(this.orientacion==="S"){
      let y = parseInt(this.posicionActual[2]) - 1;
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1]+ y.toString() + this.posicionActual[3];
    }
    if(this.orientacion==="O"){
      let x = parseInt(this.posicionActual[0]) - 1;
      this.posicionActual = x.toString() + this.posicionActual[1] + this.posicionActual[2]+this.posicionActual[3];
    }
  }
}
let auto = null; 

export default function superficiePlana(dimension) {
  if(dimension=="") return "Ingrese una cadena valida";
  if(dimension.length == 1)  return "La dimension necesita tener 2 valores ej; 2,2";
  if(dimension[0] != dimension[2]) return "Ingrese una dimension cuadrada";
  else
  {
    return dimension;
  }
}

export  function coordenadaInicial(coordenada) {
  if(coordenada=="") return "Ingrese una cadena valida";
  if(isNaN(coordenada[0])||isNaN(coordenada[2])) return "Ingrese una coordenada valida. Ej: 1,2";
  if(!isNaN(coordenada[3])) return "Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)";
  if(coordenada[3] == "N" || coordenada[3] == "E" || coordenada[3] == "O" || coordenada[3] == "S") {
    auto = new Auto(coordenada);
    auto.posicionInicial;
    return auto.posicionInicial;
  }
  else return "Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)";
}

export  function comandos(comando){
  if (comando === "I") {
      auto.MirarIzquierda()
      return "I"
  }
  if (comando === "D") {
    auto.MirarDerecha()
      return "D"
  }
  if (comando === "A") {
    auto.avanzar();
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

export function moverAuto(posicionInicial, comando) {
  coordenadaInicial(posicionInicial);
  validarSecuencia(comando);
  return auto.posicionActual;
}



 