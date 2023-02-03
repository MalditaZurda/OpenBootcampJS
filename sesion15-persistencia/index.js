// localStorage.setItem("nombre", "Agustin")
// localStorage.setItem("nombre", "Miguel")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({
    nombre: "Agustin",
    edad: 25,
    isDeveloper: true
}))

console.log(JSON.parse(localStorage.getItem("persona")))

localStorage.removeItem("nombre")

sessionStorage.setItem("persona", JSON.stringify({
    nombre: "Matilda",
    edad: 13
}))

console.log(JSON.parse(sessionStorage.getItem("persona")))

document.cookie = "nombreCookie=AgustinCookie"

document.cookie = "nombreCaducidad=nombre;expires=" + new Date(2023, 4 , 4).toUTCString()

console.log(document.cookie)