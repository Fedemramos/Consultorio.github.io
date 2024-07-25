document.addEventListener('DOMContentLoaded', function() {
    const formPaciente = document.getElementById('form-paciente');
    const listaPacientes = document.getElementById('lista-pacientes');

    formPaciente.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const direccion = document.getElementById('direccion').value;

        if (nombre && apellido && edad && direccion) {
            const paciente = document.createElement('li');
            paciente.className = "bg-gray-100 p-4 rounded-md shadow-sm flex justify-between items-center";

            paciente.innerHTML = `
                <span>${nombre} ${apellido}, ${edad} años, ${direccion}</span>
                <div>
                    <button class="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 mr-2" onclick="editarPaciente(this)">Editar</button>
                    <button class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600" onclick="borrarPaciente(this)">Borrar</button>
                </div>
            `;

            listaPacientes.appendChild(paciente);

            formPaciente.reset();
        } else {
            alert('Por favor complete todos los campos.');
        }
    });
});

function editarPaciente(button) {
    const paciente = button.parentElement.parentElement;
    const datosPaciente = paciente.firstElementChild.textContent.split(', ');

    const [nombreApellido, edad, direccion] = datosPaciente;
    const [nombre, apellido] = nombreApellido.split(' ');

    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('edad').value = parseInt(edad);
    document.getElementById('direccion').value = direccion;

    paciente.remove();
}

function borrarPaciente(button) {
    const paciente = button.parentElement.parentElement;
    paciente.remove();
}
