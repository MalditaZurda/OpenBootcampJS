// Sets ( Conjuntos )

const array = [1,2,3,4,5,6,1,2,3];
const miSet = new Set(array);
console.log(array) // => [ 1, 2, 3, 4, 5, 6, , 1, 2, 3, 4, 5 ]

console.log(miSet) // => Set { 1, 2, 3, 4, 5, 6, undefined }


// los sets nos permiten asegurarnos que no habra valores duplicados

// .add() para agregar valores

miSet.add(9);
console.log(miSet) // => Set { 1, 2, 3, 4, 5, 6, 9 }
// si intentamos añadir un valor que ya esta dentro por supuesto que no lo hara}

// .delete() para eliminar elemetos

miSet.delete(4);
console.log(miSet) // => Set { 1, 2, 3, 5, 6, 9 }
// solo puedes añadir o eliminar un elemento a la vez

// .clear() para eliminar todos los elementos

/* miSet.clear();
console.log(miSet) // => Set {  } */

// .has() para comprobar si el conjunto contiene algub valor
console.log(miSet.has(5)) // => true

// .size es la propiedad que nos permite conocer la longitud del conjunto
console.log(miSet.size) //=> 6

// iterar conjunto

miSet.forEach(valor => {console-log(valor)});

// factor propagacion

const nuevoSet = [...miSet];

