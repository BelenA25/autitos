function comandos(comando){
    if (comando === "I") {
        return "I"
    }
    if (comando === "D") {
        return "D"
    }
    else{
        return "Ingrese un comando valido"
    }
}

export default comandos;