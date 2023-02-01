//import {suma,eleva,factorial} from './modulos/matematicas.js'
import * as moduloMatematica from './modulos/matematicas.js'
import getAutor from './modulos/literatura.js'

let sum = moduloMatematica.suma(2,5);

let elev = moduloMatematica.eleva(5,98);

let fact = moduloMatematica.factorial(88);

console.log(sum,' + ', elev,' + ', fact);

let nombre = getAutor();
console.log(nombre)
