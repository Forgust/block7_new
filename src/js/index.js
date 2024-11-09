import '../scss/main.scss';
// import '../html/side_menu.html';
import '../html/index.html';
import './swipers';

let headerRightBlock = document.querySelector('.header__right-block');


let brandsMoreButton = document.querySelector('.brands__button');
let devicesMoreButton = document.querySelector('.devices__button');

let brandsList = document.querySelectorAll('.brands-slide');
let devicesList = document.querySelectorAll('.devices-slide');

let burgerButton = document.querySelector('.round-button--burger');
let menuBurger =  document.querySelector('.side-menu--left');
let menuFeedback = document.querySelector('.feedback');
let mainPage = document.querySelector('.content');
let closeButtonBurger = document.querySelector('.side-menu--left .round-button--close');
let closeButtonFeedback = document.querySelector('.feedback .round-button--close')
let feedbackButton = headerRightBlock.querySelector('.round-button--chat')
console.log('feedbackButton' + feedbackButton.className);

function openModal (modal) {
  console.log(modal + 'Твой класс');
  modal.classList.toggle('open');
  mainPage.classList.toggle('close');
}







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

feedbackButton.onclick = function () {
  openModal(menuFeedback);
}

closeButtonFeedback.onclick = function () {
  openModal(menuFeedback);
}

burgerButton.onclick = function () {
  openModal(menuBurger);
}

closeButtonBurger.onclick = function () {
  openModal(menuBurger);
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
  desctopHiden(brandsList);
  desctopHiden(devicesList);
});



