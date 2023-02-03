const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    //console.log("click")
    confirm("¿estas de acuerdo?") ? console.log("ok") : console.log("Noo")

})

const info = document.querySelector("#info")

info.addEventListener("click", () => {
    const nombre = prompt("¿cual es tu nombre?")
    if (nombre){
        console.log(`tu nombre es ${nombre}`)
        lista.push(nombre)
    }else {
        console.log("no has introducido nada")
    }
})

const lista = [{
    nombre: "gorka",
    edad: 34
},{
    nombre: "julien",
    edad: 21
},{
    nombre: "anastasia",
    edad: 30
}]

console.table(lista)