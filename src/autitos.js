class Auto {
  constructor(posicionInicial, limites) {
    this.posicionInicial = posicionInicial;
    this.posicionActual = posicionInicial;
    this.limites = limites;
  }
  estaMirando(eje){
    return this.posicionActual[3] === eje;
  }
  MirarIzquierda() {
    if (this.estaMirando("N")) {
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + "O";
      return
    }
    if (this.estaMirando("E")) {
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + "N";
      return
    }
    if (this.estaMirando("S")) {
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + "E";
      return
    }
    if (this.estaMirando("O")) {
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + "S";
      return
    }
  }
  MirarDerecha() {
    if (this.estaMirando("N")) {
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + "E";
      return
    }
    if (this.estaMirando("E")) {
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + "S";
      return
    }
    if (this.estaMirando("S")) {
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + "o";
      return
    }
    if (this.estaMirando("O")) {
      this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + this.posicionActual[2] + "N";
      return
    }
  }
  avanzar() {
    if (this.estaMirando("N")) {
      let y = parseInt(this.posicionActual[2]) + 1;
      if (y > parseInt(this.limites[0])) {
        this.posicionActual = this.posicionActual;
      }
      else {
        this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + y.toString() + this.posicionActual[3];
      }
    }
    if (this.estaMirando("E")) {
      let x = parseInt(this.posicionActual[0]) + 1;

      if (x > parseInt(this.limites[0])) {
        this.posicionActual = this.posicionActual;
      }
      else {
        this.posicionActual = x.toString() + this.posicionActual[1] + this.posicionActual[2] + this.posicionActual[3];
      }
    }
    if (this.estaMirando("S")) {
      let y = parseInt(this.posicionActual[2]) - 1;

      if (y < 0) {
        this.posicionActual = this.posicionActual;
      }
      else {
        this.posicionActual = this.posicionActual[0] + this.posicionActual[1] + y.toString() + this.posicionActual[3];
      }
    }
    if (this.estaMirando("O")) {
      let x = parseInt(this.posicionActual[0]) - 1;

      if (x < 0) {
        this.posicionActual = this.posicionActual;
      }
      else {
        this.posicionActual = x.toString() + this.posicionActual[1] + this.posicionActual[2] + this.posicionActual[3];
      }
    }
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
    auto.MirarIzquierda();
    return "I";
  }
  if (comando === "D") {
    auto.MirarDerecha();
    return "D";
  }
  if (comando === "A") {
    auto.avanzar();
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

export function moverAuto(posicionInicial, comando, dimension) {
  superficiePlana(dimension)
  coordenadaInicial(posicionInicial);
  validarSecuencia(comando);
  return auto.posicionActual;
}



