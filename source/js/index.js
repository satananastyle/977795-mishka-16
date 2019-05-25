var header = document.querySelector('.header');
var headToggle = document.querySelector('.header__toggle');

var hitButton = document.querySelector(".hit__button");

var size = document.querySelector(".modal");
var overlay = document.querySelector(".overlay")
var close = size.querySelector(".modal__button");

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

hitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  size.classList.add("modal--show");
  overlay.classList.add("overlay--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  size.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (size.classList.contains("modal--show")) {
      size.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
