// Funciones de tipo flecha y funciones anonimas 

const array = [1,5,6,2,7,12,8,92]

const array2 = array.map((valor) => valor*2)

console.log(array2) // => [ 2, 10, 12, 4, 14, 24, 16, 184 ]


////

console.log(doble(6)) // => 12  
//console.log(dobleDelValor(6)) // => Cannot access 'dobleDelValor' before initialization

// Para las variables de tipo LET y las funciones de tipo FUNCTION(como la funcion doble) son afectadas por el hoisting.

const dobleDelValor = valor => valor * 2

const array3 = array.map(dobleDelValor)
console.log(array3)  // [ 2, 10, 12, 4, 14, 24, 16, 184 ]


function doble(valor){
    return valor*2;
}