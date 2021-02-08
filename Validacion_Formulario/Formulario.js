

function validar() {
  textoNombre = document.getElementById("campoNombre");
  textoApellido = document.getElementById("campoApellido");
  textoTlf = document.getElementById("campoTlf");
  textoUsuario = document.getElementById("campoUsuario");
  textoCorreo = document.getElementById("campoCorreo");
  var valido = new Boolean(true);





  if (textoNombre.value == null || textoNombre.value.length == 0) {
    alert('[ERROR] Nombre esta vacío o es incorrecto.');
    textoNombre.style.border = "red 2px solid"

    valido = false;
  } else {

    textoNombre.style.border = "green 2px solid"
  }


  if (textoApellido.value == null || textoApellido.value.length == 0) {
    alert('[ERROR] Apellidos esta vacío o es incorrecto.');
    textoApellido.style.border = "red 2px solid"
    valido = false

  } else {
    textoApellido.style.border = "green 2px solid"
  }
  if (textoTlf.value.length < 9 || textoTlf.value.length > 9) {

    alert('[ERROR] Telefono esta vacío o es incorrecto.');
    textoTlf.style.border = "red 2px solid"
    valido = false

  } else {
    textoTlf.style.border = "green 2px solid"
  }
  if (textoUsuario.value == null || textoUsuario.value.length == 0) {

    alert('[ERROR]Usuario esta vacío o es incorrecto.');
    textoUsuario.style.border = "red 2px solid"
    valido = false;
  } else {
    textoUsuario.style.border = "green 2px solid"
  }

  if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(textoCorreo.value)) {

    textoCorreo.style.border = "red 2px solid"
    valido = false
  } else {
    textoCorreo.style.border = "green 2px solid"
  }
  if (valido != false) {
    window.location.href = "PaginaEnviar.html";
  }
}
