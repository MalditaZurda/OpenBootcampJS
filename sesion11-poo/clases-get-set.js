// Ambitos publicos, privados y protegidos:

// Los atributos de la clase Persona declarados como lo hicimos en el archivo clases.js son atributos publicos
// Podemos acceder a ellos e incluso modificarlos. Pero tal vez no queremos que asi sea. 
// Para ello inicializamos los atributos antes del constructor con un hash( # ) al principio.


class Persona{
    //Private => #
    // Solo puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protected ==> _
    //Solo puede acceder desde dentro de la clase y clases descendientes
    _isDeveloper = true
    

    constructor(nombre,edad){
        this.#nombre = nombre,
        this.#edad = edad
    }

    saludo(){
        console.log(`Hola! mi nombre es ${this.nombre} y tengo ${this.edad} años. Un placer!`)
    }

    obtenNombre(){
        return this.#nombre; // ==> esto es un Getter, nos permite acceder(de forma controlada) al atributo nombre
    }
    
    getEdad(){
        return this.#edad;
    }

    setEdad(nueva_edad){
        this.#edad = nueva_edad;
        return this.#edad;
    }
}

const Viale = new Persona('Mauro', 68)

console.log(Viale)

console.log(Viale.nombre)  // ==> undefined , no podemos acceder al nombre.
datos = Viale.obtenNombre()
console.log(datos)
console.log(Persona._isDeveloper) // ==> undefined



// Getters ==> Metodos que nos permiten obtener atributos/metodos privados o protegidos.
const edad = Viale.getEdad()

// Setters ==> Metodos que nos permiten modificar el valor de alguno de los atributos privados o protegidos.
//Quiero cambiar la edad de la persona
Viale.setEdad(23)
console.log(Viale.getEdad()) // => 23