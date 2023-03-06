$(function(){
    //cuando pasas la mano sobre algun objeto veras el title
    //ocupa estilos de jQuery UI
    $(document).tooltip()
    //aunque no es funcional vemos un seleccionador de fecha
    //distinto al que por default tiene el html
    $("#in-fecha").datepicker()
    $("#crear").click( function(){
        let nu = $("#nu").val()
        let f = $("#in-fecha").val()
        let ce = $("#ce").val()
        var a = "Hola: "+nu+", naciste el "+f+" tu email es "+ce+" y tu contraseña es privada"
        //muestra los datos en una pantallita emergente
        alert(a)
    } )
})