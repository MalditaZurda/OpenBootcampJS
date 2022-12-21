// Trabajando con fechas

const fecha = new Date(); // fecha actual

console.log(fecha); // siempre se actualiza 

// Atencion - los meses inicializan en 0
const fecha2 = new Date(1987, 10, 20, 1, 22, 3)
console.log(fecha2) // => Fri Nov 20 1987 01:22:03 GMT-0300 (hora estándar de Argentina)

const fecha3 = new Date(0)
console.log(fecha3);

const fecha4 = new Date("october 13, 1979");
console.log(fecha4); // => Sat Oct 13 1979 00:00:00 GMT-0300 (hora estándar de Argentina)

// Comparar una fecha 

console.log(fecha < fecha4); // false
// para comparar si una fecha es igual a la otra hay que compararla con milisegundos.

const fecha5 = new Date(1987, 10, 20, 1, 22, 3) // aunque esta declarada igual que fecha 2
console.log(fecha5 === fecha2); // => false -- ERROR

// para compararlas usampos .getTime()

console.log(fecha2.getTime() === fecha5.getTime()) // => true -- asi comparamos la igualdad entre fechas

//////////////

// obtener el dia => .getDate()
console.log(fecha2.getDate()) // 20
// obtener el mes .getMonth() + 1
console.log(fecha2.getMonth() + 1) // 11 -- sumamos uno porque se inicializa en 0
// obtener año .getFullYear()
console.log(fecha2.getFullYear()) // 1987


////

// Como mostrar una fecha en un string -- .toLocalDateString()

console.log(fecha2.toLocaleDateString()) // 20/11/1987

