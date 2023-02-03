// $("selector").accion()

//$(document).ready(() => {...})

$(() => {
    // Selectores
    // id="el-1" => "#el-1"
    // class="el-1" => ".el-1" 


    $(".hide-btn").click(() => {
        $("#el-1").hide()
    })

    $(".show-btn").click(() => {
        $("#el-1").show()
    })

    $(".new-element").click(() => {
        // $("ul").append("<li>New Element</li>")   al final de la lista
        $("ul").prepend("<li>New Element</li>")  // al inicio de la lista
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })
    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })
})