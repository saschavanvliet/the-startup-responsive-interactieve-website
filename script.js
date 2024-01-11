// let svg = document.querySelector('svg:nth-of-type(1)')
// svg.addEventListener('click', menu)
// function menu() {
// svg.classList.toggle('streepjes')
// }



// let img = document.querySelector('img')
// foto1.addEventListener('click', nieuw)
// function nieuw() {
// img.classList.toggle('nieuw')
// }

document.addEventListener('DOMContentLoaded', function () {
    const svgElement = document.querySelector('.notfixed');

    window.addEventListener('scroll', function () {
        // Als het scrollen naar beneden is gegaan, verwijder dan de 'notfixed' klasse en voeg 'fixed' toe
        if (window.scrollY > 0) {
            svgElement.classList.remove('notfixed');
            svgElement.classList.add('visible');
        } else {
            // Als er niet is gescrold (terug naar boven), voeg dan 'notfixed' toe en verwijder 'fixed'
            svgElement.classList.remove('visible');
            svgElement.classList.add('notfixed');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let dropdownButton = document.getElementById('dropdownButton');
    let dropdownMenu = document.getElementById('dropdownMenu');

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

// document.addEventListener('DOMContentLoaded', function () {
//     const profielen = document.getElementById('img');

//     this.images.addEventListener('click', function () {
//         // Navigeer naar de nieuwe pagina wanneer de foto wordt geklikt
//         window.location.href = 'https://www.youtube.com/';
//         // Vervang 'jouwnieuwepagina.html' door de gewenste URL van je nieuwe pagina
//     });
// });