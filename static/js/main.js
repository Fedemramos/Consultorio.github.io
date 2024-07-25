function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('w-1/4');
        mainContent.classList.remove('expanded');
        mainContent.classList.add('w-3/4');
    } else {
        sidebar.classList.add('collapsed');
        sidebar.classList.remove('w-1/4');
        mainContent.classList.add('expanded');
        mainContent.classList.remove('w-3/4');
    }
});

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = 'logout.html'; // Cambia esta URL por tu URL real de logout
});


// Cargar la página principal al inicio
window.onload = function() {
    loadPage('main.html');
};

document.getElementById('logout').addEventListener('click', () => {
    window.location.href = 'login.html'; // Cambia 'login.html' por la URL de tu página de inicio de sesión
});


function setActive(element) {
    // Remove 'text-blue-500' class from all links
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('text-blue-500'));
            
    // Add 'text-blue-500' class to the clicked link
    element.classList.add('text-blue-500');

}
 
