import superficiePlana from "./autitos.js";

describe("Superficie Plana", () => {
  it("deberia retornar 0", () => {
    expect(superficiePlana("")).toEqual(0);
  });
  it("deberia retornar el mismo numero con un numero", () => {
    expect(superficiePlana("1")).toEqual(1);
  });
});
