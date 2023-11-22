
function validarFormulario() {
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    const correoValido = validarCorreo(correo);
    const contraseñaValida = validarContraseña(contraseña);

    // Logica de validacion //

    if (correoValido && contraseñaValida) {
        localStorage.setItem('correo', correo);
        localStorage.setItem('contraseña', contraseña);
        window.location.href = 'html/inicio.html';
    } else {
        // Mostrar mensaje de error según la situación
        var mensajeError = document.getElementById('mensaje-error');

        if (!correoValido && !contraseñaValida) {
            mensajeError.innerText = 'Por favor, ingrese un correo electrónico y una contraseña válidos.';
        } else if (!correoValido) {
            mensajeError.innerText = 'Por favor, ingrese un correo electrónico válido.';
        } else {
            mensajeError.innerText = 'La contraseña debe ir asi: Ejemplosimple12@, con longitud mayor o igual a 8.';
        }

        // Mostrar el mensaje de error
        mensajeError.style.display = 'block';

        // Borrar el contenido solo del campo que no es válido
        if (!correoValido) {
            document.getElementById('correo').value = '';
        }

        if (!contraseñaValida) {
            document.getElementById('contraseña').value = '';
        }
    }
}


//Validación del correo//

function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

//Validacion de la contraseña//

function validarContraseña(contraseña) {
    const longitudMínima = 8;
    const contieneNúmero = /\d/.test(contraseña);
    const contieneMayúscula = /[A-Z]/.test(contraseña);
    const contieneMinúscula = /[a-z]/.test(contraseña);
    return (
      contraseña.length >= longitudMínima &&
      contieneNúmero &&
      contieneMayúscula &&
      contieneMinúscula
    );
}


  






 
  