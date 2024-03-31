import React from 'react'
import MovieCard from '../Browse/SecondaryContainer/MovieCard';
import { useSelector } from 'react-redux';

const MovieDisplay = () => {

    const {searchMovie} = useSelector((state) => state.search);

    console.log("checking data", searchMovie);

    console.log("Entered");

  return (
    <div className=' flex flex-col gap-5 sm:gap-10 items-center ' >
      {/* movie title */}
      <h1 className='text-3xl font-bold text-white ' >{searchMovie?.title}</h1>
      <MovieCard data={searchMovie} />
    </div>
  )
}

export default MovieDisplay;