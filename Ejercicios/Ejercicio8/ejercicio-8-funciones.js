// - Una función sin parámetros que devuelva siempre "true"

function siempreTrue() {
    return true;
}

console.log(siempreTrue());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function asincrona() {
    setTimeout(() => {
        console.log("Hola soy una promesa");
    }, 5000)
}

// - Una función generadora de índices pares automáticos

function* generadora(){
    let par = 0;
    while (par < 1000000){
        par = par + 2;
        yield par;
    }
    return par;
}

const gen = generadora();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)