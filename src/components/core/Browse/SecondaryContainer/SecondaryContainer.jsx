import React from 'react'
import { useEffect } from 'react'
import {getHindiMovies, popularMovies, topRatedMovies} from '../../../../services/operations/moviesAPI'
import { useDispatch } from 'react-redux'

const SecondaryContainer = () => {

  const dispatch = useDispatch();

  // will trigger on first render
  useEffect(() => {
    // hindi movies
    dispatch(getHindiMovies());

    // popular movies
    dispatch(popularMovies());

    // top rated movies
    dispatch(topRatedMovies());

  },[])

  return (
    <div>

    </div>
  )
}

export default SecondaryContainer;