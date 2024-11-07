import '../scss/main.scss';
import '../html/side_menu.html';
import '../html/index.html';
import './swipers';

let brandsMoreButton = document.querySelector('.brands__button');
let devicesMoreButton = document.querySelector('.devices__button');

let brandsList = document.querySelectorAll('.brands-slide');
let devicesList = document.querySelectorAll('.devices-slide');


function showMore (slidsList, button) {
  for (let i = 0; i < slidsList.length; i++) {
    if (slidsList[i].classList.contains('hiden-slide')) {
      slidsList[i].classList.remove('hiden-slide');
      slidsList[i].classList.add('not-hiden');
      button.textContent = 'Скрыть';
    } else if (slidsList[i].classList.contains('not-hiden')) {
      slidsList[i].classList.add('hiden-slide');
      slidsList[i].classList.remove('not-hiden');
      button.textContent = 'Показать все';
    };
  };
  button.classList.toggle('reverse');
}

brandsMoreButton.onclick = function () {
  showMore(brandsList, brandsMoreButton);
}

devicesMoreButton.onclick = function () {
  showMore(devicesList, devicesMoreButton);
}

function desctopHiden (slidsList) {
    for (let i = 0; i < slidsList.length; i++) {
        if (window.innerWidth >= 1120 && slidsList[i].classList.contains('desctop') && slidsList[i].classList.contains('hiden-slide')) {
            slidsList[i].classList.remove('hiden-slide');
            slidsList[i].classList.add('not-hiden-desctop');
        } else if (window.innerWidth < 1120 && slidsList[i].classList.contains('not-hiden-desctop')) {
            slidsList[i].classList.remove('not-hiden-desctop');
            slidsList[i].classList.add('hiden-slide');
      };
    };
};

desctopHiden(brandsList);
desctopHiden(devicesList);

window.addEventListener('resize', function () {
  console.log(window.innerWidth);
  desctopHiden(brandsList);
  desctopHiden(devicesList);
});



