import React from 'react'
import { useEffect } from 'react'
import {getHindiMovies, popularMovies} from '../../../../services/operations/moviesAPI'
import { useDispatch } from 'react-redux'

const SecondaryContainer = () => {

  const dispatch = useDispatch();

  // will trigger on first render
  useEffect(() => {
    // hindi movies
    dispatch(getHindiMovies());

    // popular movies
    dispatch(popularMovies());
  },[])

  return (
    <div>

    </div>
  )
}

export default SecondaryContainer;