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
        spaceBetween={"25"}
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
        className='mySwiper'
      >
        {
          movies?.map((movieData, index) => (
            <SwiperSlide key={index} >
              <MovieCard data={movieData} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default SwiperScrollBar;