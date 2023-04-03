import superficiePlana from "./autitos.js";

describe("Superficie Plana retorno de dimension", () => {
  it("deberia retornar 0", () => {
    expect(superficiePlana("")).toEqual(0);
  });
  it("deberia retornar el mismo numero con un numero", () => {
    expect(superficiePlana("1")).toEqual(1);
  });
  it("deberia retornar 0 con dimensiones no cuadradas", () => {
    expect(superficiePlana("1,2")).toEqual(0);
  });
});
