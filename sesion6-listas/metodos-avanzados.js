// Metodos avanzados, que nos van a devolver listas.

// .map()  .filter()  .reduce()

const array = [ "San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"];

let prueba = array.forEach(ciudad => {
    console.log(ciudad)
    return "prueba";
});
console.log(prueba); // => undefined. el metodo forEach nos permite iterar cada elemento de un array, pero incluso retornando un valor este metodo no nos devuelve nada, ya que no es su funcion.

// .map()

const arrayMap = array.map((valor,indice) => `${indice + 1}- ${valor}`)
console.log(arrayMap);


// .filter()

const listaObjetos = [
    {nombre: "leire", edad: 35},
    {nombre: "gorka", edad: 34},
    {nombre: "miguel", edad: 28},
    {nombre: "lucia", edad: 3},
    {nombre: "amaia", edad: 29}
]

/* const arrayFilter = listaObjetos.filter(obj => {
    if(obj.edad > 30){
        return true;
    }else{
        return false;
    }
})

console.log(arrayFilter); */ // => [ { nombre: 'leire', edad: 35 }, { nombre: 'gorka', edad: 34 } ]

const arrayFilter = listaObjetos.filter(obj => obj.edad > 30);
console.log(arrayFilter); // => [ { nombre: 'leire', edad: 35 }, { nombre: 'gorka', edad: 34 } ]

const arrayFilter2 = listaObjetos.filter(obj => obj.nombre !== "miguel");
console.log(arrayFilter2);


// .reduce()

let arrayReducePrueba = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

const suma = arrayReducePrueba.reduce((indicePrimero, indiceUltimo, valorActual, arrayOriginal) => {
    console.log(indicePrimero);
    console.log(indiceUltimo);
    console.log(valorActual);
    console.log(arrayOriginal);
    
})
console.log(suma)

// Entendiendo mejor la funcion .reduce()

const numbers = [2,4,6,8,10];


// la funcion recibe minimo dos parametros( +2 overloads ). 
// el primero es una funcion callback con 4 parametros
// .reduce( (acumulador, item, index, array ) => { } ). por lo general siempre utilizaremos al menos los primeros dos parametros.

/* const respuesta = numbers.reduce( (acc, item) => {
    return acc = acc + item;   // => esto ira sumando al valor acumulado el valor actualmente iterado
})

console.log(respuesta) */ // => 30 

// El segundo parametro de la funcion reduce es el valor inicial del cual se empezara a realizar las operaciones.


const respuesta = numbers.reduce( (acc, item) => {
    return acc = acc + item;   // => esto ira sumando al valor acumulado el valor actualmente iterado
}, 10); // => 40

// Si no colocamos un valor inicial se tomara el valor del primer elemento del array como punto de partida.

// Este return no retornara el resultado directamente a la variable respuesta. sino que lo hara a la variable acc(acumulador) para seguir trabajando con ella en las siguientes iteraciones.