
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;
    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper)
      }

    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  resizableSwiper(
    '(max-width: 768px)',
    '.brands__swiper',
    {
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    }
  );

  resizableSwiper(
    '(max-width: 768px)',
    '.devices__swiper',
    {
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    }
  );

  resizableSwiper(
    '(max-width: 768px)',
    '.prices__swiper',
    {
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    }
  );
});