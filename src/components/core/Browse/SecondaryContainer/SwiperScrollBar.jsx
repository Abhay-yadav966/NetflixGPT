import React from 'react'
import MovieCard from './MovieCard'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SwiperScrollBar = ({movies}) => {

  console.log("movies data -->", movies);

  return (
    <div>
      <Swiper
        spaceBetween={"60"}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
        breakpoints={{
          450:{slidesPerView:2},
          650:{slidesPerView:3},
          1024:{slidesPerView:5},
        }}
      >
        {
          movies?.map((movieData, index) => (
            <SwiperSlide key={index} className='py-10' >
              <MovieCard data={movieData} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default SwiperScrollBar;