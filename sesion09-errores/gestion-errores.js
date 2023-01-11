// Gestion de errores:


// Esta es una forma de gestionar un error 

const miFuncion = (val) => {
    if(typeof val === "number"){
        return 2 * val;
    } else {
        //return false;
        throw new Error("El valor ingresado debe ser de tipo number")
    }
    
}

//console.log(miFuncion("8")); // El valor ingresado debe ser de tipo number

const numero = "8";

try {
    // codigo que puede fallar
    console.log("Esta ejecutandose de forma corecta");
    const doble = miFuncion(numero);
    console.log(doble);
} catch(error) {
    // En caso de fallar quiero que ejecutes
    console.error(`el valor de error es: ${error}`);
    console.error(error)
} finally {
    console.log("esto siempre se ejecuta")
}


// Errores mas comunes :

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
