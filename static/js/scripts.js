function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            if (page === 'pacientes.html') {
                showPacientesSection(); // Mostrar el formulario de gestión de pacientes si se carga la página de pacientes
            }
        });
}

function showPacientesSection() {
    document.getElementById('pacientes-section').style.display = 'block';
}

// Evento para el formulario de agregar paciente
document.addEventListener('DOMContentLoaded', function() {
    const formPaciente = document.getElementById('form-paciente');
    if (formPaciente) {
        formPaciente.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí puedes manejar la lógica para agregar un paciente
            console.log('Agregar paciente');
            // Por ejemplo, podrías realizar una petición fetch para enviar los datos a tu servidor
        });
    }

    const editarButton = document.getElementById('editar');
    if (editarButton) {
        editarButton.addEventListener('click', function() {
            // Lógica para editar paciente
            console.log('Editar paciente');
        });
    }

    const borrarButton = document.getElementById('borrar');
    if (borrarButton) {
        borrarButton.addEventListener('click', function() {
            // Lógica para borrar paciente
            console.log('Borrar paciente');
        });
    }
});
