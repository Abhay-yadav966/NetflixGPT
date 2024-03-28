import React from 'react'
import { useEffect } from 'react'
import {getHindiMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '../../../../services/operations/moviesAPI'
import { useDispatch, useSelector } from 'react-redux'
import SwiperScrollBar from './SwiperScrollBar'

const SecondaryContainer = () => {

  const dispatch = useDispatch();

  // fetchdata from slice
  const {hindiMovies, popularMovies, topRatedMovies, upcomingMovies} = useSelector((state) => state.movie);

  // will trigger on first render
  useEffect(() => {
    // hindi movies
    dispatch(getHindiMovies());

    // popular movies
    dispatch(getPopularMovies());

    // top rated movies
    dispatch(getTopRatedMovies());

    // upcoming movies
    dispatch(getUpcomingMovies());

  },[])

  return (
    <div className='bg-black pb-20 ' >
        <div className='flex flex-col gap-7 py-5 w-11/12 max-w-7xl mx-auto' >
          {/* hindi movies */}
          <div className='flex flex-col gap-2 -mt-32 ' >
            <h1 className='text-3xl font-bold text-white ' >Now Playing</h1>
            <div>
              <SwiperScrollBar movies={hindiMovies} />
            </div>
          </div>

          {/* popular movies */}
          <div className='flex flex-col gap-2' >
            <h1 className='text-3xl font-bold text-white ' >Popular</h1>
            <div>
              <SwiperScrollBar movies={popularMovies} />
            </div>
          </div>

          {/* top rated */}
          <div className='flex flex-col gap-2' >
            <h1 className='text-3xl font-bold text-white ' >Trending</h1>
            <div>
              <SwiperScrollBar movies={topRatedMovies} />
            </div>
          </div>

          {/* UpComing movies */}
          <div className='flex flex-col gap-2' >
            <h1 className='text-3xl font-bold text-white ' >Upcoming Movies</h1>
            <div>
              <SwiperScrollBar movies={upcomingMovies} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default SecondaryContainer;