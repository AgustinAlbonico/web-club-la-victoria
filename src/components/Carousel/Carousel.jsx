import Foto1 from '../../img/slider1.png'
import Foto2 from '../../img/slider2.png'
import Foto3 from '../../img/slider3.png'
import Foto4 from '../../img/slider4.png'
import Foto5 from '../../img/slider5.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoHeight={true}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      noSwiping={true}
      noSwipingClass={'swiper-slide'}
      className='carousel'
    >
      <SwiperSlide style={{ margin: 0, display: 'flex', borderRadius: '5px' }}>
        <img
          src={Foto1}
          alt=''
          className='carousel-foto'
          height={400}
          style={{ objectFit: 'cover', margin: '0 auto' }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ margin: 0, display: 'flex', borderRadius: '5px' }}>
        <img
          src={Foto2}
          alt=''
          className='carousel-foto'
          height={400}
          style={{ objectFit: 'cover', margin: '0 auto' }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ margin: 0, display: 'flex', borderRadius: '5px' }}>
        <img
          src={Foto3}
          alt=''
          className='carousel-foto'
          height={400}
          style={{ objectFit: 'cover', margin: '0 auto' }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ margin: 0, display: 'flex', borderRadius: '5px' }}>
        <img
          src={Foto4}
          alt=''
          className='carousel-foto'
          height={400}
          style={{ objectFit: 'cover', margin: '0 auto' }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ margin: 0, display: 'flex', borderRadius: '5px' }}>
        <img
          src={Foto5}
          alt=''
          className='carousel-foto'
          height={400}
          style={{ objectFit: 'cover', margin: '0 auto' }}
        />
      </SwiperSlide>
    </Swiper>
  )
}
