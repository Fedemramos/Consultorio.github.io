document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario
    document.getElementById('loader').style.display = 'block'; // Mostrar el loader
    document.getElementById('loginForm').classList.add('hidden'); // Ocultar el formulario

    // Simular un retraso para mostrar la animación de carga
    setTimeout(function() {
        event.target.submit(); // Enviar el formulario
    }, 2000); // Ajustar el retraso según sea necesario
});
