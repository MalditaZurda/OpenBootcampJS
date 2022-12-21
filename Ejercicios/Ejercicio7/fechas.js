// La fecha de hoy

const fechaDeHoy = new Date()
console.log(fechaDeHoy); // Wed Dec 21 2022 14:59:25 GMT-0300 (hora estándar de Argentina)

// La fecha de tu nacimiento

const fechaDeNacimiento = new Date(1997, 6, 1);
console.log(fechaDeNacimiento); // Tue Jul 01 1997 00:00:00 GMT-0300 (hora estándar de Argentina)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

hoyEsMasTarde = fechaDeHoy > fechaDeNacimiento;
console.log(hoyEsMasTarde); // true

// - Una variable que contenga el día de tu nacimiento

const diaDeNacimineto = fechaDeNacimiento.getDate();
console.log(diaDeNacimineto); // 1

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const mesDeNacimiento = fechaDeNacimiento.getMonth() + 1;
console.log(mesDeNacimiento); // 7

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const anioDeNacimiento = fechaDeNacimiento.getFullYear();
console.log(anioDeNacimiento); // 1997