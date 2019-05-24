var header = document.querySelector('.header');
var headToggle = document.querySelector('.header__toggle');


header.classList.remove('header--nojs');

headToggle.addEventListener('click', function() {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--opened');
  } else {
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
  }
});
