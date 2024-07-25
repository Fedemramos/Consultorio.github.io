document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const randomBackground = Math.random() >= 0.5 ? 'bg-custom-one' : 'bg-custom-two';
    body.classList.add(randomBackground);
});