import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let devicesSwiper = new Swiper('.devices__swiper', {
  wrapperClass: 'devices__swiper-wrapper',
  slideClass: 'devices-slide',
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickTable: true,
  },
});

  export default devicesSwiper;
