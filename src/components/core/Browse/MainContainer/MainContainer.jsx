import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TrailerDetails from './TrailerDetails'
import TrailerVideoBackground from './TrailerVideoBackground'


const MainContainer = () => {

    // fetching movies data from slice
    const {nowPlayingMovies} = useSelector((state) => state.movie);

    // state variable for movie index
    const [movieIndex, setMovieIndex] = useState(null);

    // state variable for trailer data
    const [trailerData, setTrailerData] = useState(null);

    // get Random Movie index
    const getRandomMovieIndex = () => {
      const randomMovieIndex = Math.floor((Math.random() * nowPlayingMovies?.length));

      console.log("Value of random movie id --->", randomMovieIndex);

      setMovieIndex(randomMovieIndex);
    }

    // render when nowPlayingMovies data change from slice
    useEffect(() => {
      if(nowPlayingMovies){
        getRandomMovieIndex();
      }
    }, [nowPlayingMovies]);


    // fetch trailer data
    const fetchTrailerData = () => {
      const data = nowPlayingMovies[movieIndex];
      console.log("trailer data", data);

      setTrailerData(data);
    }

    // render when movieIndex will change 
    useEffect(() => {
      fetchTrailerData();
    }, [movieIndex])

  return (
    <div>
      <TrailerDetails title={trailerData?.title} desc={trailerData?.overview} />
      <TrailerVideoBackground trailerId={trailerData?.id} />
    </div> 
  )
}

export default MainContainer;