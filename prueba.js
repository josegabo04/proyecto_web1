$(document).ready(function () {

    $("#btnSesion").click(function () {
        var correo = $("#txtCorreo").val();
        var pass = $("#txtPass").val();
        var flag = true;

        if (correo === ""|| pass === "") {
            alert("Ningún campo puede estar vacio.");
            flag = false;
        }
    })
})


/*
const btnSesion = document.getElementById("btnSesion");
btnSesion.addEventListener("click", validaUsuario);

function validaUsuario() {
  const correo = document.getElementById("txtCorreo");
  const pass = document.getElementById("txtPass");
  var flag = true;
  if (correo === "" || pass === "") {
    alert("Ningún campo puede estar vacio.");
    flag = false;
  }
}
*/