// una variable que contenga la lista de compras

const listaCompras = ["Tapa de asado", "Lechuga", "Cebolla", "Cigarrillos", "Manteca", "Desodorante"];

// modifica la lista de compras y añadele aceite de girasol

listaCompras.push("Aceite de girasol");

// vuelve a modificar la lista de la compra eliminando "Aceite de girasol"

listaCompras.pop("Aceite de girasol");

// una lista de tus 3 peliculas favoritas(objetos con propiedades: titulo,director,fecha)

const listaPeliculas = [
    {titulo: "El club de la pelea", director: "David Fincher", fecha: 1999},
    {titulo: "Memento", director: "Christopher Nolan", fecha: 2000},
    {titulo: "Batman, el caballero de la noche", director: "Christopher Nolan", fecha: 2008}
];

// una nueva lista que contenga las peliculas posteriores al 1 de enero de 2010

const posterioresAl2010 = listaPeliculas.filter( pelicula => pelicula.fecha >= 2010 );

// una nueva lista que contenga los directores de la lista original

const directores = listaPeliculas.map( pelicula => pelicula.director)

// una nueva lista que conteng los titulos de las peliculas de la lita original

const peliculas = listaPeliculas.map( pelicula => pelicula.titulo)

// una nueva lista que concatene la lista de direcoters y la lista de titulos

const tituloDirector = directores.concat(peliculas)

// una nueva lista que concatene la lista de directores y la lista de titulos utilizando el factor de propagacion

const listaProp = [...directores, ...peliculas];

