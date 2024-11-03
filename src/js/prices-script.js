import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default pricesSwiper = new Swiper('.prices__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickTable: true ,
    },
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      375: {
        slidesPerView: 1.4,
      },
  
      425: {
        slidesPerView: 1.6,
      },
  
      600: {
        slidesPerView: 2.3,
      }
    },
  });
  