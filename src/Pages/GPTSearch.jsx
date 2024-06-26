import React, { useEffect } from 'react'
import Navbar from '../components/Common/Navbar';
import SearchForm from '../components/core/GPTSearch/SearchForm';
import MovieDisplay from '../components/core/GPTSearch/MovieDisplay';


const GPTSearch = () => {

  return (
    <div className='relative ' >
        <Navbar/> 
        
        {/* background image */}
        <img loading="lazy" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background image" 
          className='bg-cover w-screen h-screen '
        />

        <div className='absolute top-52 sm:top-44 w-full flex flex-col items-center gap-3 sm:gap-5 ' >
          {/* Search Form */}
          <SearchForm/>

          {/* diaplay movie */}
          <MovieDisplay/>
        </div>
        
    </div>
  )
}

export default GPTSearch;