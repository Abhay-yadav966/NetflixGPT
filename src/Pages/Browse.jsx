import React, { useEffect } from 'react'
import Navbar from '../components/Common/Navbar';
import {getNowPlayingMovies} from '../services/operations/moviesAPI'
import { useDispatch } from 'react-redux';
import MainContainer from '../components/core/Browse/MainContainer';

const Browse = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, [])

  return (
    <div>
        <Navbar/>
        <MainContainer/>
    </div>
  )
}

export default Browse;