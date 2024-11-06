import '../scss/main.scss';
import '../html/index.html';
import './swipers';

let showMoreButton = document.querySelector('.show-more__button');

    

function desctopHiden () {
    for (let i = 0; i < slidsList.length; i++) {
        if (window.innerWidth >= 1440 && slidsList[i].classList.contains('desctop')) {
            slidsList[i].classList.remove('hiden-slide');
            slidsList[i].classList.add('not-hiden-desctop');
        } else if (window.innerWidth < 1440 && slidsList[i].classList.contains('not-hiden-desctop')) {
            slidsList[i].classList.remove('not-hiden-desctop');
            slidsList[i].classList.add('hiden-slide');
      };
    };
};
   



showMoreButton.onclick = function () {
    for (let i = 0; i < slidsList.length; i++) {
      if (slidsList[i].classList.contains('hiden-slide')) {
        slidsList[i].classList.remove('hiden-slide');
        slidsList[i].classList.add('not-hiden');
        showMoreButton.textContent = 'Скрыть';
      } else if (slidsList[i].classList.contains('not-hiden')) {
        slidsList[i].classList.add('hiden-slide');
        slidsList[i].classList.remove('not-hiden');
        showMoreButton.textContent = 'Показать все';
      };
    };
    showMoreButton.classList.toggle('reverse');
};






