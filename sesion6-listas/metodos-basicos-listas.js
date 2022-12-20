// Como trabajar con listas

let va1 = {id: false}
let array = [1, "hola", false, {id: 5} , null, undefined, va1];

// Acceder a los valores de un array a traves de su posicion
// array[indice] => 0,1,2,3,4,5,...

// Metodos para indtroducir nuevos valores en nuestros arrays.
//.push() .unshift() => Mutan el valor de nuestro array

// Valor al final => push
array.push("final",45, 100, false);

// Valor al principio => unshift
array.unshift("inicio", 87, 99);

// Metodos para eliinar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array

//Valores al final => pop
array.pop()

//Valores al inicio => shift
array.shift()

// Metodo para eliminar, modificar o añadir valores en nuestros arrays
// .splice(x,y,z)
// arrays.splice(desde que indice, cuantos elementos en adelante)

const array2 = [1,2,3,4,5,6];
array2.splice(2,2) // => [1,2,5,6]
array2.splice(3,1) // => [1,2,3,5,6]

//Añadir valores => .splice(desde que indice, valores a eliminar en adelante, valores a añadir)

// este metodo es un quilombo ni en pedo lo uso. hasta aca llegue
