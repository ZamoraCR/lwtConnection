document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('servicios-dropdown-button');
    const dropdownContent = document.getElementById('servicios-dropdown-content');
    const dropdownIcon = document.getElementById('dropdown-icon');

    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('hidden');
        dropdownIcon.textContent = dropdownContent.classList.contains('hidden') ? '▼' : '▲'; // Cambia el icono
    });
});
