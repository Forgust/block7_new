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


