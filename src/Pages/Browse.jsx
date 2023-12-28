import React, { useEffect } from 'react'
import Navbar from '../components/Common/Navbar';
import {getNowPlayingMovies} from '../services/operations/moviesAPI'
import { useDispatch, useSelector } from 'react-redux';
import MainContainer from '../components/core/Browse/MainContainer/MainContainer';
import SecondaryContainer from '../components/core/Browse/SecondaryContainer/SecondaryContainer';

const Browse = () => {

  const dispatch = useDispatch();

  const {nowPlayingMovies} = useSelector((state) => state.movie);

  useEffect(() => {
    nowPlayingMovies.length === 0 && dispatch(getNowPlayingMovies());
  }, [])

  return (
    <div>
        <Navbar/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse;