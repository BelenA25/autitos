class Auto {
  constructor(posicionInicial, limites) {
    this.posicionInicial = posicionInicial;
    this.posicionActual = posicionInicial;
    this.limites = limites;
  }

  MirarIzquierda() {
    if (this.estaMirando("N")) {
      this.nuevaPosicionMirandoAl("O");
      return
    }
    if (this.estaMirando("E")) {
      this.nuevaPosicionMirandoAl("N");
      return
    }
    if (this.estaMirando("S")) {
      this.nuevaPosicionMirandoAl("E");
      return
    }
    if (this.estaMirando("O")) {
      this.nuevaPosicionMirandoAl("S");
      return
    }
  }

  MirarDerecha() {
    if (this.estaMirando("N")) {
      this.nuevaPosicionMirandoAl("E");
      return
    }
    if (this.estaMirando("E")) {
      this.nuevaPosicionMirandoAl("S");
      return
    }
    if (this.estaMirando("S")) {
      this.nuevaPosicionMirandoAl("O");
      return
    }
    if (this.estaMirando("O")) {
      this.nuevaPosicionMirandoAl("N");
      return
    }
  }

  avanzar() {
    let y = this.obtenerYDePosicionActual();
    let x = this.obtenerXDePosicionActual();
    if (this.estaMirando("N")) {
      y = y + 1;
      this.comprobarLimitesYAvanzar(x, y);
    }
    if (this.estaMirando("E")) {
      x = x + 1;
      this.comprobarLimitesYAvanzar(x, y);
    }
    if (this.estaMirando("S")) {
      y = y - 1;
      this.comprobarLimitesYAvanzar(x, y);
    }
    if (this.estaMirando("O")) {
      x = x - 1;
      this.comprobarLimitesYAvanzar(x, y);
    }
  }
  moverAutoConComandos(comando) {
    for(let i = 0; i < comando.length; i++) {
      if (comando[i] === "I") {
        this.MirarIzquierda();
      }
      if (comando[i] === "D") {
        this.MirarDerecha();
      }
      if (comando[i] === "A") {
        this.avanzar();
      }
    }
  }

  comprobarLimitesYAvanzar(x, y) {
    if (this.sobrepasaLosLimites(x, y)) {
      this.posicionActual = this.posicionActual;
    }
    else {
      this.actualizarPosicionActual(x, y);
    }
  }

  estaMirando(eje) {
    return this.posicionActual[3] === eje;
  }

  nuevaPosicionMirandoAl(eje) {
    this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + eje;
  }

  obtenerYDePosicionActual() {
    return parseInt(this.posicionActual[2]);
  }

  obtenerXDePosicionActual() {
    return parseInt(this.posicionActual[0]);
  }

  sobrepasaLosLimites(x, y) {
    return y > parseInt(this.limites[0]) || x > parseInt(this.limites[0]) || y < 0 || x < 0
  }

  actualizarPosicionActual(x, y) {
    this.posicionActual = x.toString() + this.posicionActual[1] + y.toString() + this.posicionActual[3];
  }
}

let auto = null;
let limite = "";

export default function superficiePlana(dimension) {
  if (dimension == "") return "Ingrese una cadena valida";
  if (dimension.length == 1) return "La dimension necesita tener 2 valores ej; 2,2";
  if (dimension[0] != dimension[2]) return "Ingrese una dimension cuadrada";
  else {
    limite = dimension;
    return dimension;
  }
}

export function coordenadaInicial(coordenada) {
  if (coordenada == "") return "Ingrese una cadena valida";
  if (isNaN(coordenada[0]) || isNaN(coordenada[2])) return "Ingrese una coordenada valida. Ej: 1,2";
  if (!isNaN(coordenada[3])) return "Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)";
  if (coordenada[3] == "N" || coordenada[3] == "E" || coordenada[3] == "O" || coordenada[3] == "S") {
    auto = new Auto(coordenada, limite);
    return auto.posicionInicial;
  }
  else return "Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)";
}

export function comandos(comando) {
  if (comando === "I") {
    return "I";
  }
  if (comando === "D") {
    return "D";
  }
  if (comando === "A") {
    return "A";
  }
  else {
    return "Ingrese un comando valido"
  }
}
export function validarSecuencia(secuencia) {
  let secuenciaValida = "";

  for (let i = 0; i < secuencia.length; i++) {
    let comandoActual = secuencia[i];
    let resultado = comandos(comandoActual);

    if (resultado === "Ingrese un comando valido") {
      throw new Error(resultado);
    }

    secuenciaValida += resultado;
  }

  return secuenciaValida;
}

export function avanceFinal(posicionInicial,comando, limites) {
  if(superficiePlana(limites) != limites){
    return superficiePlana(limites);
  }
  if(coordenadaInicial(posicionInicial)!=posicionInicial){
    return coordenadaInicial(posicionInicial);
  }
  auto = new Auto(posicionInicial, limites);
  if(validarSecuencia(comando)!=comando){
    return validarSecuencia(comando);
  }
  auto.moverAutoConComandos(comando);
  return auto.posicionActual;

}