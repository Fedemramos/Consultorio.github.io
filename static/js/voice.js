let voices = [];
        
        function populateVoiceList() {
            voices = window.speechSynthesis.getVoices();
        }
        
        populateVoiceList();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }

        function speak(text) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-ES';

            // Seleccionar una voz específica
            const voice = voices.find(voice => voice.lang === 'es-ES' && voice.name.includes('Google'));
            if (voice) {
                utterance.voice = voice;
            }

            window.speechSynthesis.speak(utterance);
        }

        document.addEventListener("DOMContentLoaded", () => {
            loadPage('main.html'); // Cargar contenido inicial
        });

        function speakInfo() {
            const nombreMedico = "Doctor"; // Cambia esto según sea necesario
            const turnosDia = document.getElementById('turnos-dia')?.innerText || '0';
            const numeroPacientes = document.getElementById('numero-pacientes')?.innerText || '0';
            const turnosSemana = document.getElementById('turnos-semana')?.innerText || '0';

            const message = `Bienvenida al consultorio, ${nombreMedico}. Hoy tenés ${turnosDia} turnos. Hay ${numeroPacientes} pacientes. Esta semana están los turnos ${turnosSemana}.`;

            speak(message);
        }

        function loadPage(url) {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('main-content').innerHTML = html;
                    if (url === 'main.html') {
                        // Agregar el botón de hablar después de cargar el contenido
                        const button = document.createElement('button');
                        button.textContent = "Hablar";
                        button.onclick = speakInfo;
                        button.className = "bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-teal-700 transition duration-300";
                        document.getElementById('main-content').appendChild(button);
                    }
                });
        }