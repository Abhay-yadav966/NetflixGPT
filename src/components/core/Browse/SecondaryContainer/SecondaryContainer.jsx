import React from 'react'
import { useEffect } from 'react'
import {getHindiMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '../../../../services/operations/moviesAPI'
import { useDispatch } from 'react-redux'

const SecondaryContainer = () => {

  const dispatch = useDispatch();

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

    </div>
  )
}

export default SecondaryContainer;