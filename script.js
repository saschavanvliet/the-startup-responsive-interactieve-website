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
    let ruimte = document.querySelector('.ruimtebody');
});

    //Menu komt tevoorschijn!
    dropdownButton.addEventListener('click', menu)
    function menu() {
      dropdownMenu.classList.toggle('active');
    };

//      // button 10
// let interface = document.querySelector('a:nth-of-type(10)')
// let kaas1 = document.querySelector('.kaas1')
// interface.addEventListener('mouseover', breincelweg)
// function breincelweg(){
//   kaas1.classList.toggle('kaas1')
// }
    

  // // Move the dropdown menu between nav and h1
  // if (dropdownMenu.classList.contains('visible')) {
  //   // Move the dropdown menu after the nav element
  //   nav.insertAdjacentElement('afterend', dropdownMenu);
  // } else {
  //   // Move the dropdown menu back inside the nav element
  //   nav.appendChild(dropdownMenu);
  // }