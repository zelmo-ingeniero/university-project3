//cuando se da clic en el boton blanco se activa esto
$("button").click( function(){
    //por fortuna jQuery acepta la variable 
    $(prevision)
        .effect("bounce", {}, 1000)
})
//simple divisor
prevision = document.getElementById("receptor")
//se ejecuta cuando el input = file
document.getElementById("archivo").onchange = function(e){
    let lectorArchivos = new FileReader()
    /*
    creo que e es un evento del navegador
    algo asi como el Storage tambien
    */
    console.log(e.target.files[0])
    //esta es la src que entrara en la multimedia
    lectorArchivos.readAsDataURL( e.target.files[0] )
    //esto se ejecuta al subirlo desde el explorador del sistema
    lectorArchivos.onload = function(){
        console.log("entrando a la subida")
        if(e.target.files[0].type == "video/mp4"){
            //es un video
            contenido = document.createElement("video")
            console.log("se creo video")
            contenido.src = lectorArchivos.result
            //esto es un poco innecesario pero no se en donde
            //mas se podria poner
            contenido.controls = true
            contenido.autoplay = true
            contenido.loop = true
            console.log(contenido)
            //sin esto lo primero se distorsiona
            prevision.innerHTML = ""
            prevision.append(contenido)
            /*queria un efecto pero no aparecia correctamente supongo estaba
              desactualizado o algo asi
              a veces se bugea pienso que por donde colocas el mause
            */
            $(prevision)
                .slideUp(1) //lo encoje
                .append(contenido) // esto se puede con js puro
                .slideDown("slow") //animacion visible
        }else{
            if(e.target.files[0].type == "image/png" || "image/jpg" || "image/gif"){
                //es una imagen
                contenido = document.createElement("img")
                console.log("se creo img")
                contenido.src = lectorArchivos.result
                console.log(contenido)
                //sin esto lo primero se distorsiona
                prevision.innerHTML = ""
                /*queria un efecto pero no aparecia correctamente supongo estaba
                  desactualizado o algo asi
                  a veces se bugea pienso que por donde colocas el mause
                */
                $(prevision)
                    .slideUp(1) //lo encoje
                    .append(contenido) // esto se puede con js puro
                    .slideDown("slow") //animacion visible
            }else{
                //es algo que no nos interesa
                alert("incompatible, no se pudo subir el archivo")
            }
        }
        
    }
}
function fondo(){
    //rgb(127, 127, 127)
    colorsito = 'rgb( '+ Math.random() * 127 +', '+ Math.random() * 127 +', '+ Math.random() * 127 +' )'
    document.body.style.backgroundColor = colorsito
}
window.addEventListener('load', fondo, false)

/*
primer intento que mandaba muchos errores de null
boton = document.getElementById("botoncito")
console.log(boton)
boton.addEventListener("change", (e) => {
    console.log("entramos al evento")
    let prevision = document.getElementById("receptor")
    let todos = e.target.files
    console.log(todos)
    let primero = todos[0]
    console.log(primero)
    let rutaTemporal = URL.createObjectURL(primero)
    console.log(rutaTemporal)
    prevision.src = rutaTemporal
} )
*/