// Iterar los valores de una lista 

const array = ["hola", 2, 5, 90, false, undefined];


// Forma antigua(poco eficiente)
for(let i = 0; i < array.length; i++){
    console.log(array[i]); // => hola, 2, 5, 90, false, undefined
}

// Forma moderna(ES6) => .forEach()

array.forEach(valor => {
    console.log(valor) // => hola, 2, 5, 90, false, undefined
})

// Busqueda de un valor dentro de una lista  .find()
let variable = array.find(valor => {
    if(valor === 90) {
        return true
    }
})
console.log(variable) // => 90

const listaObjetos = [
    {nombre: "leire", edad: 35},
    {nombre: "gorka", edad: 34},
    {nombre: "miguel", edad: 28},
    {nombre: "lucia", edad: 3},
    {nombre: "amaia", edad: 29}
]

/*const objeto = listaObjetos.find(el => {
    return el.nombre === "miguel";
})
console.log(objeto); // => miguel
console.log(objeto.edad); // => 28

const objeto = listaObjetos.find(el => el.nombre === "lucia");
console.log(objeto.edad);*/

const {edad} = listaObjetos.find(o => o.nombre === "gorka");
console.log(edad);

