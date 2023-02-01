class Persona{
    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre,
        this.edad = edad,
        this.isDeveloper = isDeveloper
    }

    saludo(){
        console.log(`Hola! mi nombre es ${this.nombre} y tengo ${this.edad} años. Un placer!`)
    }
}

const Gorka = new Persona('Gorka',34,true);
console.log(Gorka instanceof Persona);

Gorka.saludo()

