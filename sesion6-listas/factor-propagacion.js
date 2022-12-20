// Como unir dos listas => array.concat(array2)

const array = ["hola",2,false,null];
const array2 = ["adios",8,true,undefined];

const array3 = array.concat(array2);
// crea una nueva lista con todos los elementos de las otras dos sin modificarlas


// Como unir dos listas con el factor de propagacion

const array4 = [...array, ...array2];

// ERROR: mal entendido del factor de propagacion

const array5 = [array, array2];
// Unir dos listas de esta manera nos dara como resultado una lista con dos listas dentro. Cuando en realidad lo que buscamos es una lista nueva con los elementos de las otras dos.
// Es por esto que no es tan util el factor de propagacion.




