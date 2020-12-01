

 function validar(){
      textoNombre = document.getElementById("campoNombre").value;
      textoApellido = document.getElementById("campoApellido").value;
      textoTlf = document.getElementById("campoTlf").value;
      textoUsuario = document.getElementById("campoUsuario").value;
      textoCorreo = document.getElementById("campoCorreo").value;

     


      if (textoNombre == null || textoNombre.length == 0) {
        
        alert('[ERROR] El CAMPO (Nombre:) es obligatorio.');
        
      }else if(textoApellido == null || textoApellido.length == 0){

        alert('[ERROR] El CAMPO (Appellidos:) es obligatorio.');

      }else if(textoTlf == null || textoTlf.length < 9 || textoTlf.length > 9){

        alert('[ERROR] El CAMPO (Telefono:) es obligatorio.');

      }else if(textoUsuario == null || textoUsuario.length == 0){

        alert('[ERROR] El CAMPO (Usuario:) es obligatorio.');
      }else if(textoCorreo == null || textoCorreo.length == 0 ){

        alert('[ERROR] El CAMPO (Correo:) es obligatorio.');
      
      }else if (textoCorreo !=( !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor))){
        alert('[ERROR] El formato del correo no es el adecuado');
      }else{
        window.location.href = "PaginaEnviar.html";
      }
    }
