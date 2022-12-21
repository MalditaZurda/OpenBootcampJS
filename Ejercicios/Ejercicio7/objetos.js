// un objeto con tus datos personales(nombre,apellido,edad,altura,eresDesarrollador)

const miObj = {
    nombre: 'Agustin',
    apellido: 'Leiria',
    edad: 25,
    altura: 1.83,   //en metros
    eresDesarrollador: false   // espero serlo
}

// Una variable que obtenga tu edad a partir del objeto anterior
miEdad = miObj.edad;
console.log(miEdad); // 25


// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const obj2 = {
    nombre: 'Julian',
    apellido: 'Alvarez',
    edad: 21,
    altura: 1.79,
    eresDesarrollador: false
}

const obj3 = {
    nombre: 'Juan Alberto',
    apellido: 'Tinelli',
    edad: 33,
    altura: 1.50,
    eresDesarrollador: true
}

listaObj = [miObj, obj2, obj3];
console.log(listaObj)

/* [ { nombre: 'Agustin',
    apellido: 'Leiria',
    edad: 25,
    altura: 1.83,
    eresDesarrollador: false },
  { nombre: 'Julian',
    apellido: 'Alvarez',
    edad: 21,
    altura: 1.79,
    eresDesarrollador: false },
  { nombre: 'Juan Alberto',
    apellido: 'Tinelli',
    edad: 33,
    altura: 1.5,
    eresDesarrollador: true } ] */

////////////

//  Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

nuevaLista = listaObj.sort((a, b) => a.edad - b.edad);
console.log(nuevaLista);

/* [{
    nombre: 'Julian',
    apellido: 'Alvarez',
    edad: 21,
    altura: 1.79,
    eresDesarrollador: false
},
{
    nombre: 'Agustin',
    apellido: 'Leiria',
    edad: 25,
    altura: 1.83,
    eresDesarrollador: false
},
{
    nombre: 'Juan Alberto',
    apellido: 'Tinelli',
    edad: 33,
    altura: 1.5,
    eresDesarrollador: true
}] */
