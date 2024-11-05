
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



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