$(document).ready(function () {
    //Validacion Inicio Sesion
    $("#email").on("input", function () {
        if ($("#email").val() == "") {
            $("#mensajemail").html("El Email es obligatorio!");
        } else {
            $("#mensajemail").html("");
        }
    });
    $("#contra").on("input", function () {
        if ($("#contra").val().length < 8) {
            $("#mensajecontra").html("La Contraseña tiene que tener 8 caracteres!");
        } else {
            $("#mensajecontra").html("");
        }
    });
    //Validacion Registro
    $("#email2").on("input", function () {
        if ($("#email2").val() == "") {
            $("#mensajemail2").html("El Email es obligatorio!");
        } else {
            $("#mensajemail2").html("");
        }
    });
    $("#user").on("input", function () {
        if ($("#user").val() == "") {
            $("#mensajeuser").html("El Usuario es obligatorio!");
        } else {
            $("#mensajeuser").html("");
        }
    });
    $("#contra2").on("input", function () {
        if ($("#contra2").val().length < 8) {
            $("#mensajecontra2").html("La Contraseña tiene que tener 8 caracteres!");
        } else {
            $("#mensajecontra2").html("");
        }
    });
        //Validacion PERFIL
        $("#inputEmail4").on("input", function () {
            if ($("#inputEmail4").val() == "") {
                $("#mensajemail3").html("El Email es obligatorio!");
            } else {
                $("#mensajemail3").html("");
            }
        });
        $("#inputPassword4").on("input", function () {
            if ($("#inputPassword4").val().length < 8) {
                $("#mensajecontra3").html("La Contraseña tiene que tener 8 caracteres!");
            } else {
                $("#mensajecontra3").html("");
            }
        });
        $("#inputAddress").on("input", function () {
            if ($("#inputAddress").val() == "") {
                $("#mensajedirec").html("La Direccion es obligatoria!");
            } else {
                $("#mensajedirec").html("");
            }
        });
        $("#inputCity").on("input", function () {
            if ($("#inputCity").val() == "") {
                $("#mensajeCiudad").html("La Ciudad es obligatoria!");
            } else {
                $("#mensajeCiudad").html("");
            }
        });
        $("#inputZip").on("input", function () {
            if ($("#inputZip").val() == "") {
                $("#mensajePostal").html("El Codigo Postal es obligatorio!");
            } else {
                $("#mensajePostal").html("");
            }
        });
});