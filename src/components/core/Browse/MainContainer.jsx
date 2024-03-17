import React from 'react'
import {getLatestTrailer} from '../../../services/operations/moviesAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    // fetching movies data from slice
    const {nowPlayingMovies} = useSelector((state) => state.movie);

    // state variable for movie id
    const [movieId, setMovieId] = useState(null);

    // get Random Movie Trailer
    const getRandomMovieTrailer = () => {
      const getrandomMovieId = Math.floor((Math.random() * nowPlayingMovies?.length));

      console.log("Value of random movie id --->", getrandomMovieId);

      setMovieId(getrandomMovieId);
    }

    // first render
    useEffect(() => {
        getRandomMovieTrailer();
    }, [nowPlayingMovies]);

  return (
    <div>

    </div>
  )
}

export default MainContainer;