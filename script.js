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

document.addEventListener('DOMContentLoaded', function () { //Dit is extra!!!
    let dropdownButton = document.getElementById('dropdownButton');
    let dropdownMenu = document.getElementById('dropdownMenu');
    let container = document.getElementById('container');
});

    //Menu komt tevoorschijn!
    dropdownButton.addEventListener('click', menu)
    function menu() {
      dropdownMenu.classList.toggle('active');
    };

    // Toggle de weergave van de container wanneer op de knop wordt geklikt
    dropdownButton.addEventListener('click', ruimte)
    function ruimte() {
      container.classList.toggle = ('container.show')
    };

  // // Move the dropdown menu between nav and h1
  // if (dropdownMenu.classList.contains('visible')) {
  //   // Move the dropdown menu after the nav element
  //   nav.insertAdjacentElement('afterend', dropdownMenu);
  // } else {
  //   // Move the dropdown menu back inside the nav element
  //   nav.appendChild(dropdownMenu);
  // }