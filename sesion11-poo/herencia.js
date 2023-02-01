class Persona{
    _nombre  // Creamos variables protegidas que solo podran accederse desde la propia clase o descendientes
    _edad

    constructor(nombre,edad){
        this._nombre = nombre,
        this._edad = edad
    }

    saludo(){
        console.log(`Hola! mi nombre es ${this.obtenNombre()} y tengo ${this.getEdad()} años. Un placer!`)
    }

    obtenNombre(){
        return this._nombre; // ==> esto es un Getter, nos permite acceder(de forma controlada) al atributo nombre
    }
    
    getEdad(){
        return this._edad;
    }

    setEdad(nueva_edad){
        this._edad = nueva_edad;
        return this._edad;
    }
}

// Inheritance - Herencia 

class Desarrollador extends Persona {
    constructor(nombre,edad,lenguaje){
        super(nombre,edad) // Debemos usar el metodo super() para traer los atributos de la clase padre(Persona)
        this.lenguaje = lenguaje
    }
    saludo(){  // Override
        super.saludo() 
        console.log(`Soy desarrollador y trabajo con el lenguaje ${this.lenguaje}`)
    } 
}
const juan = new Desarrollador('Juan', 24, 'JavaScript');
console.log(juan.getEdad());
console.log(juan.obtenNombre(), juan.lenguaje)
console.log(juan);
juan.setEdad(32);
console.log(juan.getEdad())


// Polimorfismo
// Sobreescribimos el metodo saludo para añadir una nueva funcionalidad en la clase desarrollador.
juan.saludo(); // => Hola! mi nombre es Juan y tengo 32 años. Un placer!  Soy desarrollador y trabajo con el lenguaje JavaScript