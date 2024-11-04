import '../scss/main.scss';
import '../html/index.html';
import './brands-script';
import './devices-script';
import './prices-script';

//импортирую свайперы
import devicesSwiper from './devices-script';
import brandsSwiper from './brands-script';
import pricesSwiper from './prices-script';

//собираю в масив
let swipers = [devicesSwiper, brandsSwiper, pricesSwiper];


// работа со свайпером при ресайзе
// window.addEventListener('resize', () => {
//     for (let swiper = 0; swiper < swipers.length; swiper++) {
//         if (window.innerWidth >= 768) {
//             swipers[swiper].disable();
//             swipers[swiper].slidesPerView('all')
//         } else {
//             swipers[swiper].enable();
//         };
//     };
//  });

