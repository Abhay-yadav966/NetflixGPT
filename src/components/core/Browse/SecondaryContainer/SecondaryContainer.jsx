import React from 'react'
import { useEffect } from 'react'
import {getHindiMovies} from '../../../../services/operations/moviesAPI'
import { useDispatch } from 'react-redux'

const SecondaryContainer = () => {

  const dispatch = useDispatch();

  // will trigger on first render
  useEffect(() => {
    // hindi movies
    dispatch(getHindiMovies());

    // 
  },[])

  return (
    <div>

    </div>
  )
}

export default SecondaryContainer;