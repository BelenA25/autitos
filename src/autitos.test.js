import superficiePlana from "./autitos.js";

describe("Superficie Plana retorno de dimension", () => {
  it("deberia retornar mensaje de error cuando la cadena es vacia", () => {
    expect(superficiePlana("")).toEqual("ingrese una cadena valida");
  });
  it("deberia retornar el mismo numero con un numero", () => {
    expect(superficiePlana("1")).toEqual(1);
  });
  it("deberia retornar 0 con dimensiones no cuadradas", () => {
    expect(superficiePlana("1,2")).toEqual(0);
  });
  it("deberia retornar la dimension cuando se ingresa correctamente", () => {
    expect(superficiePlana("4,4")).toEqual(4);
  });
});
