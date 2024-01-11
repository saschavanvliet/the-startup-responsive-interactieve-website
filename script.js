// let svg = document.querySelector('svg:nth-of-type(1)')
// svg.addEventListener('click', menu)
// function menu() {
// svg.classList.toggle('streepjes')
// }

// let svg = document.querySelector('svg:nth-of-type(1)')
// svg.addEventListener('click', menu)
// function menu() {
// svg.classList.toggle('streepjes')
// }

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdownButton.addEventListener('click', function () {
        // Toggle de weergave van het dropdown-menu
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Sluit het dropdown-menu als er buiten wordt geklikt
    document.addEventListener('click', function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== dropdownButton) {
            dropdownMenu.style.display = 'none';
        }
    });
});