function validar() {                                                                             /*defino variables para cada dato*/
    var nombreConsulta = document.getElementById("nombre").value;      
    var mailConsulta = document.getElementById("mail").value;
    var telefonoConsulta = document.getElementById("fono").value;
    var mensajeConsulta = document.getElementById("mens").value;
    var esMail = /\w+@\w+\.+[a-z]/;                                                              /*para validar formato del mail*/

    if(nombreConsulta === "") {                                                                  /*nombre vacío*/
        alert("Dejame tu nombre, por favor");
        return false;
    }

    if(mailConsulta === "") {
        alert("Te pido una dirección de email para contestarte, por favor");                     /*mail vacío*/
        return false;
    }

    if(!esMail.test(mailConsulta)) {                                                             /*mail no válido*/
        alert("Tenés que ingresar una dirección de email válida, por favor");
        return false;
    }

    if(telefonoConsulta === "") {
        alert("Anotame un número telefónico de contacto, por favor");                            /*teléfono vacío*/
        return false;
    }

    if (isNaN(telefonoConsulta)) {                                                               /*teléfono no válido*/
        alert("Tenés que ingresar un número telefónico válido, por favor");
        return false;
    }
    
    if(mensajeConsulta === "") {                                                                 /*consulta vacío*/
        alert("Escribí tu consulta, por favor");
        return false;
    }


}




