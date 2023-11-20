let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let ico_hamburguer = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    // Cambiar el icono de la hamburguesa a pata o cruz
    let iconoHamburguesa = document.querySelectorAll(".hamburguer i")[0];

    if (ico_hamburguer) {
        iconoHamburguesa.className = "fa-solid fa-times";
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        ico_hamburguer = false;
    } else {
        iconoHamburguesa.className = "fa-solid fa-paw";
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        ico_hamburguer = true;
    }

    enlaces_header.classList.toggle("hamburgueropen");
});

document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function () {
    // Restaurar el icono de la hamburguesa cuando se cierra el menú
    let iconoHamburguesa = document.querySelectorAll(".hamburguer i")[0];
    iconoHamburguesa.className = "fa-solid fa-paw";

    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(" .hamburguer")[0].style.color = "#000";
});


/* #########################33 codigo de notificacion  ######################3*/



function mostrarNotificacion() {
    document.getElementById("notificacion").style.display = "block";
}

// Función para cerrar la notificación
function cerrarNotificacion() {
    document.getElementById("notificacion").style.display = "none";
}

// Asigna los eventos a los botones de "Adoptar"
var botonesAdoptar = document.querySelectorAll(".boton a");
botonesAdoptar.forEach(function(boton) {
    boton.addEventListener("click", function(event) {
        event.preventDefault(); 
        mostrarNotificacion();
    });
});


document.getElementById("cerrarNotificacion").addEventListener("click", function() {
    cerrarNotificacion();
});