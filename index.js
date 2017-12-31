
function navScroll() {
  var body = document.body;
  var element = document.documentElement;
  var nav = document.querySelector('.navbar');
  var navMobile = document.querySelector('.navbar_mobile');

  if(body.scrollTop > 180 || element.scrollTop > 180 /*|| window.pageYOffset > 100 || window.scrollY > 100*/) {
    nav.classList.add('navbar_back'); // className é mais compatível (IE 8 e 9), classList é mais moderno
    navMobile.classList.add('navbar_back');
  } else {
    nav.classList.remove('navbar_back');
    navMobile.classList.remove('navbar_back');
  }
};

window.onscroll = function() {
  navScroll();
  // fadeInElements();
  // scrollPosition(); ver a posição y no console
};

// show galery elements -----
var boxes = document.querySelectorAll('.hide');
var button = document.getElementById('btn_show');

button.addEventListener('click', removeClass);

function removeClass() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove('hide');
  }
  button.classList.add('hide');
}
// --------
