const htexto = document.getElementById("htexto")

console.log(htexto)

htexto.addEventListener("cambioEvento", evento => {
    console.log(evento.details)
    htexto.innerText = evento.details.texto
    htexto.style.color = evento.details.color
})

console.log("por aca")

function cambiarTexto(nuevoTexto, color){
    const evento = new CustomEvent("cambioTexto", {
        details: {
            texto: nuevoTexto,
            color
        }
    })
    console.log("evento")
    htexto.dispatchEvent(evento)
}

