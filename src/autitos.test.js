import superficiePlana from "./autitos.js";
import coordenadaInicial from "./autitos.js";

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
});