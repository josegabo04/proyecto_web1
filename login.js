(function validaForm() {
  'use strict'

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll('.needs-validation')
  var booly = true
  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          booly = false
        }

        form.classList.add('was-validated')

      }, false)
    })

})()

function validarEmail(email) {
  const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return patron.test(email);
}

$(document).ready(function () {

  $("#btnSesion").click(function () {
    var correo = $("#txtCorreo").val();
    var pass = $("#txtPass").val();
    var flag = true;

    if (correo === "" || pass === "") {
      alert("Ningún campo puede estar vacio.");
      flag = false;
    } else {
      if (!validarEmail(correo)) {
        alert("Debe ingresar un correo electrónico válido");
        flag = false;
      }}
    if(flag){
    window.location.href = "pedido.html";
    }
  })
})
/*
$("#btnSesion").click(function () {



  if (flag === true) {

  }

})
*/




//instagram scraper rapidapi.com





