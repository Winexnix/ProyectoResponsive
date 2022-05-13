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
});