import React from 'react'

const MovieCard = ({data}) => {

  const posterPath = `https://image.tmdb.org/t/p/w200/${data?.poster_path}`

  // if path for the poster is null then return 
  if(!data?.poster_path){
    return;
  }

  return (
    <div className='w-[200px] flex flex-col gap-1 hover:scale-125 duration-300 '>
      {/* image */}
      <img src={posterPath} alt="Poster image" className='w-full h-[200px] object-cover rounded-md'/>
      
      {/* movie name */}
      <p className='text-white' >{data?.title}</p>
    </div>
  )
}

export default MovieCard;