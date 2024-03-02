import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SwiperScrollBar = ({children}) => {

  console.log("Printing log", children);

  return (
    <div className='flex' >
      <Swiper
        spaceBetween={""}
        slidesPerView={5}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='w-full flex'
      >
        <SwiperSlide>
          {children}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperScrollBar;