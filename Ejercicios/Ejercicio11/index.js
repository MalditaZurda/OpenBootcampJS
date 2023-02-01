class Estudiante{

    constructor(nombre){
        this.nombre = nombre,
        this.asignaturas = ['HTML', 'CSS', 'JavaScript']
    }

    obtenDatos(){
        return this
    }
} 

const agustin = new Estudiante('Agustin Leiria');
console.log(agustin.obtenDatos())
