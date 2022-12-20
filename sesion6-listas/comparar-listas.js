// Como podemos comparar listas
// .every()

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

/* const resultado = array.every( valor => {
    if(typeof valor === "number"){
        return true;
    }else {
        return false;
    }
}) */

const resultado = array.every(valor => {valor > 0});

console.log(resultado);

// comparacion de listas

const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];

console.log(arr1 === arr2) // => false (las listas no se pueden comparar de esta manera)

const comparar = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false
    const res = array_1.every((valor, indice) => valor === array_2[indice]) 
    return res;
}

console.log(comparar(arr1,arr2)); // => true

console.log(comparar)