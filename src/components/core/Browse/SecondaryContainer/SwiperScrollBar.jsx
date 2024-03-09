import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SwiperScrollBar = ({children}) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=''
      >
        <SwiperSlide>
          {children}
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperScrollBar;