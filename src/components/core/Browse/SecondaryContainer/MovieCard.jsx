import React from 'react'

const MovieCard = ({data}) => {

  const posterPath = `https://image.tmdb.org/t/p/w200/${data?.poster_path}`

  // if path for the poster is null then return 
  if(!data?.poster_path){
    return;
  }

  return (
    <div className='w-[200px] h-[200px] ' >
      {/* image */}
      <img src={posterPath} alt="Poster image" className='w-full h-full object-cover  '/>
      
    </div>
  )
}

export default MovieCard;