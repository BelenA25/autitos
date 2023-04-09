import superficiePlana from "./autitos.js";
import coordenadaInicial from "./coordenada.js";
import comandos from "./comandos.js";
describe("Superficie Plana retorno de dimension", () => {
  it("deberia retornar mensaje de error cuando la cadena es vacia", () => {
    expect(superficiePlana("")).toEqual("Ingrese una cadena valida");
  });
  it("deberia retornar un mensaje de error para la superficie de una dimension", () => {
    expect(superficiePlana("1")).toEqual("La dimension necesita tener 2 valores ej; 2,2");
  });
  it("deberia retornar mensaje de error con dimensiones no cuadradas", () => {
    expect(superficiePlana("1,2")).toEqual("Ingrese una dimension cuadrada");
  });
  it("deberia retornar la dimension cuando se ingresa correctamente", () => {
    expect(superficiePlana("4,4")).toEqual("4,4");
  });
});

describe("Posicion inicial del auto", () => {
  it("deberia retornar mensaje de error cuando la cadena es vacia", () => {
    expect(coordenadaInicial("")).toEqual("Ingrese una cadena valida");
  });
  it("deberia retornar mensaje de error cuando la coordenada no cumple con el formato x,y", () => {
    expect(coordenadaInicial("a,mO")).toEqual("Ingrese una coordenada valida. Ej: 1,2");
  });
  it("deberia retornar mensaje de error cuando la coordenada no cumple con el formato x,y", () => {
    expect(coordenadaInicial("2,kN")).toEqual("Ingrese una coordenada valida. Ej: 1,2");
  });
  it("deberia retornar mensaje de error cuando la coordenada no cumple con el formato x,y", () => {
    expect(coordenadaInicial("i,8N")).toEqual("Ingrese una coordenada valida. Ej: 1,2");
  });
  it("deberia retornar mensaje de error cuando la coordenada no tiene una de los ejes cardinales", () => {
    expect(coordenadaInicial("2,87")).toEqual("Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)");
  });
  it("deberia retornar mensaje de error cuando la coordenada no tiene una de los ejes cardinales", () => {
    expect(coordenadaInicial("4,4P")).toEqual("Ingrese un eje valido. Ej: N(norte), O(oeste), E(este)");
  });
});

describe("Comandos del auto", () => {
  it("deberia retornar mensaje de error cuando el comando es vacio", () => {
    expect(comandos("")).toEqual("Ingrese un comando valido");
  });
  it("deberia retornar el comando valido I", () => {
    expect(comandos("I")).toEqual("I");
  });
  it("deberia retornar el comando valido D", () => {
    expect(comandos("D")).toEqual("D");
  });
  
});