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
  saltar() {
    let y = this.obtenerYDePosicionActual();
    let x = this.obtenerXDePosicionActual();
    if (this.estaMirando("N")) {
      y = y + 2;
      this.comprobarLimitesYAvanzar(x, y);
    }
    if (this.estaMirando("E")) {
      x = x + 2;
      this.comprobarLimitesYAvanzar(x, y);
    }
    
    if (this.estaMirando("S")) {
      y = y - 2;
      this.comprobarLimitesYAvanzar(x, y);
    }
  }
  moverAutoCon(comando) {
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
      if (comando[i] === "J") {
        this.saltar();
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

export default function superficiePlana(dimension) {
  if (dimension == "") return "Ingrese una cadena no vacia para la dimension o limite de la superficie";
  if (dimension.length == 1) return "La dimension o limite necesita tener 2 valores ej; 2,2";
  if (dimension[0] != dimension[2]) return "Ingrese una dimension o limite cuadrado. Ej: 5,5";
  else {
    return dimension;
  }
}

export function coordenadaInicial(coordenada) {
  if (coordenada == "") return "Ingrese una cadena no vacia para la posicion inicial del auto";
  if (isNaN(coordenada[0]) || isNaN(coordenada[2])) return "Ingrese una coordenada valida de posicion inicial. Ej: 1,2E";
  if (!isNaN(coordenada[3])) return "Ingrese un eje valido de posicion inicial. Ej: N(norte), O(oeste), E(este)";
  if (coordenada[3] == "N" || coordenada[3] == "E" || coordenada[3] == "O" || coordenada[3] == "S") {
    return coordenada;
  }
  else return "Ingrese un eje valido de posicion inicial. Ej: N(norte), O(oeste), E(este)";
}


export function validarSecuenciaDe(comandos) {

  const comandosValidos = ["I", "D", "A", "J"];
  if (comandos=="")
  {
    return "estas ingresando un comando vacio, ingrese un comando"
  }
  let secuenciaValida = "";

  for (let i = 0; i < comandos.length; i++) {
    const comandoActual = comandos[i];
    if (!comandosValidos.includes(comandoActual)) {
      return "Ingrese una cadena siguiendo la logica I,D,A";
    }
    secuenciaValida += comandoActual;
  }
  return secuenciaValida;
}

export function avanceFinal(limites, posicionInicial,comando) {
  if(superficiePlana(limites) != limites){
    return superficiePlana(limites);
  }
  if(coordenadaInicial(posicionInicial) != posicionInicial){
    return coordenadaInicial(posicionInicial);
  }
  auto = new Auto(posicionInicial, limites);
  if(validarSecuenciaDe(comando)!=comando){
    return validarSecuenciaDe(comando);
  }
  auto.moverAutoCon(comando);
  return auto.posicionActual;
}