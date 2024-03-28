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
    <div  >
        {/* hindi movies */}
        <div className='flex flex-col gap-5' >
          <h1 className='text-3xl font-bold ' >Now Playing</h1>
          <div>
            <SwiperScrollBar movies={hindiMovies} />
          </div>
        </div>

        {/* popular movies */}
        <div className='flex flex-col gap-5' >
          <h1 className='text-3xl font-bold' >Popular</h1>
          <div>
            <SwiperScrollBar movies={popularMovies} />
          </div>
        </div>

        {/* top rated */}
        <div className='flex flex-col gap-5' >
          <h1 className='text-3xl font-bold' >Trending</h1>
          <div>
            <SwiperScrollBar movies={topRatedMovies} />
          </div>
        </div>
    </div>
  )
}

export default SecondaryContainer;