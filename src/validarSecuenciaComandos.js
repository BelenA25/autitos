import comandos from "./comandos.js";

function validarSecuencia(secuencia) {
  let secuenciaValida = "";
  
  for(let i = 0; i < secuencia.length; i++) {
    let comandoActual = secuencia[i];
    let resultado = comandos(comandoActual);
    
    if(resultado === "Ingrese un comando valido") {
      throw new Error(resultado);
    }
    
    secuenciaValida += resultado;
  }
  
  return secuenciaValida;
}

export default validarSecuencia;