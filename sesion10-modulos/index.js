// Formas de imortar y exportar modulos
// 1) Common JS - require
// 2) import ES6 - import

const {suma,eleva,factorial} = require('./modulos/matematicas.js')


const fact = factorial(8);
console.log(fact);

const sum = suma(34, 87);
console.log(sum);

const elev = eleva(3,10);
console.log(elev);