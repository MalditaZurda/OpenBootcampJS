import chalk from 'chalk';
import {suma,multiplica} from './modulos/controller.js'

let a = suma(1,4);
let b= suma(4,5);;

let respuesta = multiplica(a,b);

console.log(chalk.green(`La respuesta es ${respuesta}`));