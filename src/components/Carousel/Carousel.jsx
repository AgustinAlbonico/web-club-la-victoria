import Foto1 from '../../img/futbolHero.jpg';
import Foto2 from '../../img/padelHero.jpg';
import Foto3 from '../../img/tenisHero.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoHeight={true}
      modules={[Autoplay]}
      autoplay={{ delay: 2500 }}
      loop={true}
      noSwiping={true}
      noSwipingClass={'swiper-slide'}
      style={{ zIndex: '999' }}
    >
      <SwiperSlide>
        <div className='slide-container'>
          <img src={Foto1} alt='' className='carousel-foto' height={300} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-container'>
          <img src={Foto2} alt='carousel-foto' height={300} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-container'>
          <img src={Foto3} alt='carousel-foto' height={300} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
