import React, { useEffect } from 'react'
import Navbar from '../components/Common/Navbar';
import {getNowPlayingMovies} from '../services/operations/moviesAPI'

const Browse = () => {

  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default Browse;