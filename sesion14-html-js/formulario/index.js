const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", evento => {
    console.log(evento)
    evento.preventDefault()
})