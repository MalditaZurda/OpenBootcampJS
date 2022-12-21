// Objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzales",
    isDeveloper: true,
    librosFavoritos: ["El codigo de la manifestacion", "El metodo"],
    "4-juegos": [1,2,3,4]
}

// Como llamar propiedades

console.log(obj.id); // => 4
console.log(obj.librosFavoritos); // => [ 'El codigo de la manifestacion', 'El metodo' ]
//console.log(obj."4-libros") esto da error. cuando definimos una llave entre comillas la forma de llamarla es:
console.log(obj["4-juegos"]) // => [ 1, 2, 3, 4 ]


// algo muy util es acceder a propiedades a traves de variables 
const prop = "isDeveloper";
console.log(obj[prop]); // => true


// podemos crear una copia del objeto de esta manera
const obj2 = obj;
console.log(obj2); // => /* { id: 4,nombre: 'Juan',apellido: 'Gonzales',isDeveloper: true,librosFavoritos: [ 'El codigo de la manifestacion', 'El metodo' ],'4-juegos': [ 1, 2, 3, 4 ] } */
// todo muy bien. sin embargo si ahora cambiamos alguna propiedad del ob2
obj2.nombre = "Marcelo";
console.log(obj2.nombre); // => Marcelo
console.log(obj.nombre); // => Marcelo

// copiar un objeto de esta forma copia tambien su referencia en memoria. si uno se modifica ambos lo hacen.

let val1 = 4;
let val2 = val1;
val2 = 6;
console.log(val1, val2);
// no pasa lo mismo cuando definimos elementos simples.


// factor propagacion en objetos
const obj3 = {...obj}
console.log(obj3) ;

obj3.nombre = "Matilda";
console.log(obj.nombre, obj3.nombre); 
// crear un nuevo obj a partir de otro con el factor de propagacion no altera ambos al hacer un cambio en uno.

//////////

// como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", año: 1939},
    {titulo: "Titanic", año: 1997},
    {titulo: "Moana", año: 2016},
    {titulo: "El efecto mariposa", año: 2004},
    {titulo: "TED", año: 2012}
]

// para ordear utilizamos .sort() => muta el valor del array original

listaPeliculas.sort((a,b) => a.año - b.año); // se pone - porque el valor debe dar negativo
console.log(listaPeliculas); // ordenadas de menor a mayor año

