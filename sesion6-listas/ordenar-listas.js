// .sort()  forma mas eficiente de ordenar listas

const array = [2,5,9,77,66,56,43,21,90,6,3];

console.log(array);

// el metodo .sort() recibe dos parametros donde el primero es el elemento anterior y el segundo el posterior
// lafuncion callback debe devolver un valor numerico:
// si el valor es negativo quiere decir que "a" tiene un indice menor que "b" 
// viceversa si retorna un valor positivo.
// si retorna un 0 no hay cambios

/* array.sort( (a,b) => {
    if(a < b){
        return -1;
    } else if(a > b){
        return 1;
    }else {
        return 0
    }
})
console.log(array) */ // => [ 2, 3, 5, 6, 9, 21, 43, 56, 66, 77, 90 ]
// asi podemos ordenar los numeros de un array de menor a mayor o viceversa.

// seria mejor escribirlo asi:

const listaObjetos = [
    {nombre: "leire", edad: 35},
    {nombre: "gorka", edad: 34},
    {nombre: "miguel", edad: 28},
    {nombre: "lucia", edad: 3},
    {nombre: "amaia", edad: 29}
];

listaObjetos.sort((a,b) => a.edad - b.edad);
console.log(listaObjetos);
/* 
[ { nombre: 'lucia', edad: 3 },
  { nombre: 'miguel', edad: 28 },
  { nombre: 'amaia', edad: 29 },
  { nombre: 'gorka', edad: 34 },
  { nombre: 'leire', edad: 35 } ] */

  