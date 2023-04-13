import superficiePlana,{comandos,coordenadaInicial,validarSecuencia,avanceFinal} from "./autitos.js";

describe("Superficie Plana retorno de dimension", () => {
  it("deberia retornar mensaje de error cuando la cadena es vacia", () => {
    expect(superficiePlana("")).toEqual("Ingrese una cadena no vacia para la dimension o limite de la superficie");
  });
  it("deberia retornar un mensaje de error para la superficie de una dimension", () => {
    expect(superficiePlana("1")).toEqual("La dimension o limite necesita tener 2 valores ej; 2,2");
  });
  it("deberia retornar mensaje de error con dimensiones no cuadradas", () => {
    expect(superficiePlana("1,2")).toEqual("Ingrese una dimension o limite cuadrado. Ej: 5,5");
  });
  it("deberia retornar la dimension cuando se ingresa correctamente", () => {
    expect(superficiePlana("4,4")).toEqual("4,4");
  });
});

describe("Posicion inicial del auto", () => {
  it("deberia retornar mensaje de error cuando la cadena es vacia", () => {
    expect(coordenadaInicial("")).toEqual("Ingrese una cadena no vacia para la posicion inicial del auto");
  });
  it("deberia retornar mensaje de error cuando la coordenada no cumple con el formato x,y", () => {
    expect(coordenadaInicial("a,mO")).toEqual("Ingrese una coordenada valida de posicion inicial. Ej: 1,2E");
  });
  it("deberia retornar mensaje de error cuando la coordenada no cumple con el formato x,y", () => {
    expect(coordenadaInicial("2,kN")).toEqual("Ingrese una coordenada valida de posicion inicial. Ej: 1,2E");
  });
  it("deberia retornar mensaje de error cuando la coordenada no cumple con el formato x,y", () => {
    expect(coordenadaInicial("i,8N")).toEqual("Ingrese una coordenada valida de posicion inicial. Ej: 1,2E");
  });
  it("deberia retornar mensaje de error cuando la coordenada no tiene una de los ejes cardinales", () => {
    expect(coordenadaInicial("2,87")).toEqual("Ingrese un eje valido de posicion inicial. Ej: N(norte), O(oeste), E(este)");
  });
  it("deberia retornar mensaje de error cuando la coordenada no tiene una de los ejes cardinales", () => {
    expect(coordenadaInicial("4,4P")).toEqual("Ingrese un eje valido de posicion inicial. Ej: N(norte), O(oeste), E(este)");
  });
  it("deberia retornar la coordenada cuando esta bien escrita", () => {
    expect(coordenadaInicial("1,2N")).toEqual("1,2N");
  });
});

describe("Comandos del auto", () => {
  it("deberia retornar mensaje de error cuando el comando es vacio", () => {
    expect(comandos("")).toEqual("Ingrese una cadena siguiendo la logica I,D,A");
  });
  it("deberia retornar mensaje de error cuando el comando no es IDA", () => {
    expect(comandos("WQ")).toEqual("Ingrese una cadena siguiendo la logica I,D,A");
  });
  it("deberia retornar el comando valido I", () => {
    expect(comandos("I")).toEqual("I");
  });
  it("deberia retornar el comando valido D", () => {
    expect(comandos("D")).toEqual("D");
  });
  it("deberia retornar el comando valido A", () => {
    expect(comandos("A")).toEqual("A");
  });
  it("deberia retornar el comando valido AADDII", () => {
    expect(validarSecuencia("AADDII")).toEqual("AADDII");
  });
  it("deberia retornar el comando valido AIAIAI", () => {
    expect(validarSecuencia("AIAIAI")).toEqual("AIAIAI");
  });


});
describe("Avance del auto", () => {
  it("deberia avanzar en un lugar", () => {
    expect(avanceFinal("1,1N","A", "9,9")).toEqual("1,2N");
  });
  it("deberia avanzar en dos lugares", () => {
    expect(avanceFinal("1,1E","AA", "9,9")).toEqual("3,1E");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("1,1E","I", "9,9")).toEqual("1,1N");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("2,3O","III", "9,9")).toEqual("2,3N");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("1,1E","I", "9,9")).toEqual("1,1N");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("1,1E","D", "9,9")).toEqual("1,1S");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("1,1S","DD", "9,9")).toEqual("1,1N");
  });
  it("deberia moverse continuamente", () => {
    expect(avanceFinal("1,2N","IAIAIAIAA", "9,9")).toEqual("1,3N");
  });
  it("deberia dejar de avanzar si se sobrepasa el limite en y", () => {
    expect(avanceFinal("1,2N","AAAAAAAAAAA","5,5")).toEqual("1,5N");
  });
  it("deberia dejar de avanzar si se sobrepasa el limite en x", () => {
    expect(avanceFinal("1,2N","DAAAAAAAAAA","5,5")).toEqual("5,2E");
  });
});
describe("Ingresar de manera erronea alguno de los criterios", () => {
  it("deberia retornar mensaje de error si se escribe mal la coordenada incial", () => {
    expect(avanceFinal("zxczd","DAAAAAAAAAA","5,5")).toEqual("Ingrese una coordenada valida de posicion inicial. Ej: 1,2E");
  });
  it("deberia retornar mensaje de error si se escribe mal el comando", () => {
    expect(avanceFinal("1,2N","retete","5,5")).toEqual("Ingrese una cadena siguiendo la logica I,D,A");
  });
  it("deberia retornar mensaje de error si se escribe mal el limite", () => {
    expect(avanceFinal("1,2N","retete","asd")).toEqual("Ingrese una dimension o limite cuadrado. Ej: 5,5");
  });
});