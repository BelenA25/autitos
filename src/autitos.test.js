import superficiePlana from "./autitos.js";

describe("Superficie Plana", () => {
  it("deberia retornar 0", () => {
    expect(superficiePlana("")).toEqual(0);
  });
});
