import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default devicesSwiper = new Swiper('.devices__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickTable: true ,
    },
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.3,
      },
      375: {
        slidesPerView: 1.5,
      },
  
      425: {
        slidesPerView: 1.7,
      },
  
      600: {
        slidesPerView: 2.4,
      },

      768: {
        slidesPerView: 3,
      }
    },
  });


