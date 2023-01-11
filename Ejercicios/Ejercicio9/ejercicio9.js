const logger = require("../../sesion09-errores/logger");

function del1al100(){
    const miArray = [];
    for(let num = 1; num <= 100; num++){
        miArray = miArray.push(num);
    }
    return miArray
}

console.log(del1al100(miArray));