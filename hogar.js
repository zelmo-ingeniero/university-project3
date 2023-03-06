$(function(){
    //crear miniatura de estado
    $("#animacion").click( function(){
        console.log("se dio el clic")
        var i = prompt("Escribe: 1.png  2.gif  3.png  4.mp4  5.mp4")
        //console.log(i)
        var n = prompt("dame el usuario")
        //console.log(n)
        switch(i){
            case "1.png":
                var estado = '<div id="estado-miniatura"><img src="' + i + '" alt="estado"> <p>' + n + '</p></div>'
            break
            case "2.gif":
                var estado = '<div id="estado-miniatura"><img src="' + i + '" alt="estado"> <p>' + n + '</p></div>'
            break
            case "3.png":
                var estado = '<div id="estado-miniatura"><img src="' + i + '" alt="estado"> <p>' + n + '</p></div>'
            break
            case "4.mp4":
                var estado = '<div id="estado-miniatura"><video src="' + i + '" controls></video> <p>' + n + '</p></div>'
            break
            case "5.mp4":
                var estado = '<div id="estado-miniatura"><video src="' + i + '" controls></video> <p>' + n + '</p></div>'
            break
            default:
                alert("ha ocurrido un error intentalo mas tarde")
            break
        }        
        console.log(estado)
        $("#contenedor-estados")
            .append(estado)
            .effect("slide", {}, 1000)
    })
    //cuando se da clic en el boton de publicar generar una nueva 
    //publicacion de texto
    $("#but-publicar").click( function(){
        console.log("se dio clic")
        //jala el dato de el cuadro
        var t = $("textarea").val()
        console.log(t)
        if(t == ""){
            alert("tienes  que escribir en el recuadro")
        }else{
            //se toma la fecha actual pero rara
            var h = new Date( Date.now() )
            //se convierte en algo leible aunque sea ingles
            h = h.toUTCString()
            console.log(h)
            var pub = '<div id="publicacion"> <h6><span class="material-symbols-outlined publicacion-cabeza-fecha">calendar_month</span>' + h + '</h6> <p>' + t + '</p> </div>'
            console.log(pub)
            $("#contenedor-publicaciones")
                .prepend(pub) //añadiendo la publicacion en el contenedor
                .effect("slide", {}, 1000) //dandole movimiento
            $("textarea")
                .val("") //se vacia para motivar a aescribir algo nuevo
        }
        /*
        $("#contenedor-publicaciones")
            .slideUp(1) //encoje todas las publicaciones (si no no se nota nadaa)
            .prepend(pub) //se añade la publicacion
            .slideDown("slow") //se hace bajar
        */
    })
})

/*
se queria que cuando los botones de megusta o molesta 
se apretaran entonces usar la sesion para aumentar un contador
pero nomas no queria funcionar
window.addEventListener('load', iniciar, false)
function iniciar(){
    numero = document.getElementById("contador-megusta").value
    sessionStorage.setItem(0, numero)
    console.log(numero)
    numero = document.getElementById("contador-molesta").value
    sessionStorage.setItem(1, numero)
    console.log(numero)
}
function aumentarMegusta(){
    sessionStorage.setItem( 0, sessionStorage.getItem(0) + 1 )
    actualizar()
}
function aumentarMolesta(){
    sessionStorage.setItem( 1, sessionStorage.getItem(1) + 1 )
    actualizar()
}
function actualizar(){
    gusta = document.getElementById("contador-megusta")
    molesta = document.getElementById("contador-molesta")
    gusta.innerHTML = ''
    gusta.innerHTML = sessionStorage.getItem(0)
    molesta.innerHTML = ''
    molesta.innerHTML = sessionStorage.getItem(0)
}*/
