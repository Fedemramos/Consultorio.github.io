document.addEventListener('DOMContentLoaded', function() {
    const formTurno = document.getElementById('form-turno');
    const listaTurnos = document.getElementById('lista-turnos');

    formTurno.addEventListener('submit', function(event) {
        event.preventDefault();

        const paciente = document.getElementById('paciente').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;

        if (paciente && fecha && hora) {
            const turno = document.createElement('li');
            turno.className = "bg-gray-100 p-4 rounded-md shadow-sm flex justify-between items-center";

            turno.innerHTML = `
                <span>${paciente} - ${fecha} - ${hora}</span>
                <div>
                    <button class="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 mr-2" onclick="editarTurno(this)">Editar</button>
                    <button class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600" onclick="borrarTurno(this)">Borrar</button>
                </div>
            `;

            listaTurnos.appendChild(turno);

            formTurno.reset();
        } else {
            alert('Por favor complete todos los campos.');
        }
    });
});

function editarTurno(button) {
    const turno = button.parentElement.parentElement;
    const datosTurno = turno.firstElementChild.textContent.split(' - ');

    document.getElementById('paciente').value = datosTurno[0];
    document.getElementById('fecha').value = datosTurno[1];
    document.getElementById('hora').value = datosTurno[2];

    turno.remove();
}

function borrarTurno(button) {
    const turno = button.parentElement.parentElement;
    turno.remove();
}
