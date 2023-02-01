// const persona = {
//     nombre: 'Gorka',
//     edad: 34,
//     isDeveloper: true,
//     saludo: function(){
//         console.log('hola')
//     }
// }

// FUNCTION FACTORY 

const crea_persona = (nombre,edad,isDeveloper) => {
    return{
        nombre,  // esto es igual a escribir nombre: nombre
        edad,
        isDeveloper,
        saludo: function(){
            console.log('hello')
        }
    }
}

const persona = crea_persona('Gorka',34,true);
console.log(persona);
console.log(persona.saludo())