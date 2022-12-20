// Como obtener una lista a partir de otra => .slice(indice inicial, indice final)

const array = ["hola",1,2,3,true,null,"adios"];

//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

console.log(array.slice()); // => ["hola",1,2,3,true,null,"adios"]

// Si solo pasamos un indice tomara los elementos desde ese indice en adelante
console.log(array.slice(3)); // => [3,true,null,"adios"]

// Si le pasamos ambos parametros creara el array con los elementos que corresponden al indice de inicio hasta los del indice final


