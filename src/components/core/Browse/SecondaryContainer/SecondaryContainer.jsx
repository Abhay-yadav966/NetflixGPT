import React from 'react'
import { useEffect } from 'react'
import {getHindiMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '../../../../services/operations/moviesAPI'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard'
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
    <div>
        {/* hindi movies */}
        <div>
          <h1>Now Playing</h1>
          <div className='flex' >
            {
              hindiMovies.map((element, index) => (
                <div key={index} className='' >
                  <MovieCard data={element} />
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default SecondaryContainer;