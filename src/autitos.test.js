import superficiePlana,{coordenadaInicial,validarSecuenciaDe,avanceFinal} from "./autitos.js";

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
    expect(validarSecuenciaDe("")).toEqual("estas ingresando un comando vacio, ingrese un comando");
  });
  it("deberia retornar mensaje de error cuando el comando no es IDA", () => {
    expect(validarSecuenciaDe("WQ")).toEqual("Ingrese una cadena siguiendo la logica I,D,A");
  });
  it("deberia retornar el comando valido I", () => {
    expect(validarSecuenciaDe("I")).toEqual("I");
  });
  it("deberia retornar el comando valido D", () => {
    expect(validarSecuenciaDe("D")).toEqual("D");
  });
  it("deberia retornar el comando valido A", () => {
    expect(validarSecuenciaDe("A")).toEqual("A");
  });
  it("deberia retornar el comando valido AADDII", () => {
    expect(validarSecuenciaDe("AADDII")).toEqual("AADDII");
  });
  it("deberia retornar el comando valido AIAIAI", () => {
    expect(validarSecuenciaDe("AIAIAI")).toEqual("AIAIAI");
  });


});
describe("Avance del auto", () => {
  it("deberia avanzar en un lugar", () => {
    expect(avanceFinal( "9,9","1,1N","A")).toEqual("1,2N");
  });
  it("deberia avanzar en dos lugares", () => {
    expect(avanceFinal("9,9","1,1E","AA")).toEqual("3,1E");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("9,9","1,1E","I")).toEqual("1,1N");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("9,9","2,3O","III")).toEqual("2,3N");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("9,9","1,1E","I")).toEqual("1,1N");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("9,9","1,1E","D")).toEqual("1,1S");
  });
  it("deberia cambiar de orientacion", () => {
    expect(avanceFinal("9,9","1,1S","DD")).toEqual("1,1N");
  });
  it("deberia moverse continuamente", () => {
    expect(avanceFinal("9,9","1,2N","IAIAIAIAA")).toEqual("1,3N");
  });
  it("deberia dejar de avanzar si se sobrepasa el limite en y", () => {
    expect(avanceFinal("5,5","1,2N","AAAAAAAAAAA")).toEqual("1,5N");
  });
  it("deberia dejar de avanzar si se sobrepasa el limite en x", () => {
    expect(avanceFinal("5,5","1,2N","DAAAAAAAAAA")).toEqual("5,2E");
  });
});
describe("Ingresar de manera erronea alguno de los criterios", () => {
  it("deberia retornar mensaje de error si se escribe mal la coordenada incial", () => {
    expect(avanceFinal("5,5","zxczd","DAAAAAAAAAA")).toEqual("Ingrese una coordenada valida de posicion inicial. Ej: 1,2E");
  });
  it("deberia retornar mensaje de error si se escribe mal el comando", () => {
    expect(avanceFinal("5,5","1,2N","retete")).toEqual("Ingrese una cadena siguiendo la logica I,D,A");
  });
  it("deberia retornar mensaje de error si se escribe mal el limite", () => {
    expect(avanceFinal("asd","1,2N","retete")).toEqual("Ingrese una dimension o limite cuadrado. Ej: 5,5");
  });
});

describe("Examen: Avanzar en dos lugares con el comando 'J'", () => {
  it("deberia reconocer el comando 'J' al validar la secuencia", () => {
    expect(validarSecuenciaDe("J")).toEqual("J");
  });
  it("deberia avanzar en dos posiciones al saltar con el comando J en el eje x", () => {
    expect(avanceFinal("9,9","1,1N","J")).toEqual("1,3N");
  });
});