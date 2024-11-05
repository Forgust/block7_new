import '../scss/main.scss';
import '../html/index.html';
import './brands-script';
import './devices-script';
import './prices-script';

import brandsSwiper from './brands-script';
import devicesSwiper from './devices-script';
import pricesSwiper from './prices-script';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let brandsSlidsList = document.querySelectorAll('.brands-slide');
let devicesSlidsList = document.querySelectorAll('.devices-slide');
let pricesSlidsList = document.querySelectorAll('.prices-slide');
let showMoreButton = document.querySelector('.show-more__button');

let brandsSwiperClass = document.querySelector('.brands__swiper');
let devicesSwiperClass = document.querySelector('.devices__swiper');
let pricesSwiperClass = document.querySelector('.prices__swiper');

let swipers = [brandsSwiper, devicesSwiper, pricesSwiper];
let swipersSlidsList = [brandsSlidsList, devicesSlidsList, pricesSlidsList];
let swipersClassList = [brandsSwiperClass, devicesSwiperClass, pricesSwiperClass];




    

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
   

 


function mobileSlider() {
    for (let y = 0; y < swipers.length; y++) {
        if (window.innerWidth < 768 && swipersClassList[y].dataset.mobile == 'false') {
            swipers[y].update;
            swipersClassList[y].dataset.mobile = 'true';
            console.log('Свайпер ' + swipers[y] + ' прошел апдейт и теперь ' + swipersClassList[y].dataset.mobile)
        } else if (window.innerWidth >= 768) {
            swipersClassList[y].dataset.mobile = 'false';
            console.log('Свайпер ' + swipers[y] + swipersClassList[y].dataset.mobile);
          if (swipersClassList[y].classList.contains('swiper-initialized')) {
            swipers[y].destroy();
            console.log('Свайпер ' + swipers[y] + ' уничтожился и теперь ' + swipersClassList[y].dataset.mobile)
          };
        };
      };
    };

mobileSlider();
window.addEventListener('resize', () => {
    mobileSlider();
});

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






