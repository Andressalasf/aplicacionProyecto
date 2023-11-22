
function validarFormulario() {
    
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    const correoValido = validarCorreo(correo);
    const contraseñaValida = validarContraseña(contraseña);

    const correoRegistrado = localStorage.getItem('correo');
    const contraseñaRegistrada = localStorage.getItem('contraseña');

    if (correo === correoRegistrado && contraseña === contraseñaRegistrada && correoValido && contraseñaValida) {
        // Si los datos coinciden, redirigir a la página de inicio
        window.location.href = 'home.html';
        alert('¡Inicio de sesión exitoso!');
    } else {
        // Mostrar mensaje de error según la situación
        var mensajeError = document.getElementById('mensaje-error');

        if (!correoValido && !contraseñaValida || !correoRegistrado &&  contraseñaRegistrada) {
            mensajeError.innerText = 'Por favor, ingrese un correo electrónico y una contraseña válidos.';
        } else if (!correoValido || !correoRegistrado) {
            mensajeError.innerText = 'Por favor, ingrese un correo electrónico válido.';
        } else {
            mensajeError.innerText = 'Por favor, ingrese una contraseña válida.';
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


function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}


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
  

