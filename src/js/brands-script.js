import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let brandsSwiper = new Swiper('.brands__swiper', {
  wrapperClass: 'brands__swiper-wrapper',
  slideClass: 'brands-slide',
  slidesPerView: 'auto',
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickTable: true ,
  },
});

export default brandsSwiper;

let logoList = document.querySelectorAll('.image-slide');
let showMoreButton = document.querySelector('.show-more__button');

showMoreButton.onclick = function () {
 
    for (let i = 0; i < logoList.length; i++) {
      if (logoList[i].classList.contains('hiden')) {
        logoList[i].classList.remove('hiden');
        logoList[i].classList.add('not-hiden');
        showMoreButton.textContent = 'Скрыть';
      } else if (logoList[i].classList.contains('not-hiden')) {
        logoList[i].classList.add('hiden');
        logoList[i].classList.remove('not-hiden');
        showMoreButton.textContent = 'Показать все';
      };
    };
    showMoreButton.classList.toggle('reverse');
};
