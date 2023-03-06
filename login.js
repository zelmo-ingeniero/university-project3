$(function(){
    //sin esto los title no crecen
    $(document).tooltip()
})
function actualizarSalida(){
    //este es el receptor
    var cuadro = document.getElementById("salida")
    cuadro.innerHTML = ""
    for(let f = 0; f < sessionStorage.length ;f++){
        //obteniendo toooda la info de storage
        var clave = sessionStorage.key(f)
        var valor = sessionStorage.getItem(clave)
        //esto es lo que se vera
        cuadro.innerHTML += '<h1>Nombre: '+ clave +'</h1><p>Contraseña: '+ valor +'</p>'
    }
    //animacion para que cresca la parte del codigo
    $("#salida").slideUp(1).slideDown(3000)
}
function nuevaCuenta(){
    //metiendo los textos al storage
    var n = document.getElementById("nombre").value
    var c = document.getElementById("contra").value
    sessionStorage.setItem(n, c)
    //una vez metida la info renovar el contenedor
    actualizarSalida()
    //sin esto el texto se conserva
    document.getElementById("nombre").value = ""
    document.getElementById("contra").value = ""
}
function establecerBoton(){
    var boton = document.getElementById("enviar")
    boton.addEventListener("click", nuevaCuenta, false)
    actualizarSalida()
}
window.addEventListener('load', establecerBoton, false)