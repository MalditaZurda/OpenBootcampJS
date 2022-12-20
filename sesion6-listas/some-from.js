// .some()

const array = [3,4,7,8,87,4,5,66,223,6,90];

const res = array.some(valor => valor < 100);
console.log(res);

// obtener una lista a partir de un objeto iterable

const str = "hola soy Marcelo";

const arr_str = Array.from(str)
console.log(arr_str);