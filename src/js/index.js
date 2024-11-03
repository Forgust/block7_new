import '../scss/main.scss';
import '../html/index.html';
import './brands-script';
import './devices-script';
import './prices-script';

import devicesSwiper from './devices-script';
import brandsSwiper from './brands-script';
import pricesSwiper from './prices-script';

console.log(brandsSwiper);

let swipers = [devicesSwiper, brandsSwiper, pricesSwiper];

window.addEventListener('resize', () => {
    
    if (window.innerWidth >= 768) {
        for (let swiper = 0; swiper < swipers.length; swiper++) {
            swipers[swiper].disable();
            console.log(window.innerWidth)
        };
    } else {
        for (let swiper = 0; swiper < swipers.length; swiper++) {
            swipers[swiper].enable();
            console.log(window.innerWidth)
        };
    };
 });
