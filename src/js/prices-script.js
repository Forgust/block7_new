import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const pricesSwiper = new Swiper('.prices__swiper', {
  wrapperClass: 'prices__swiper-wrapper',
  slideClass: 'prices-slide',
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickTable: true,
  },
});

export default pricesSwiper;