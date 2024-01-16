import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {getMovieBySearch} from '../../../services/operations/searchMovieAPI'
import { useDispatch, useSelector } from 'react-redux';


const SearchForm = () => {

  const {searchMovie} = useSelector((state) => state.search);

  const dispatch = useDispatch();

  // form hook
  const {
    register,
    handleSubmit,
    reset,
    formState:{isSubmitSuccessful},
  } = useForm();

  // submit fn.
  const submitHandler = async (data) => {
    // try{
    //   console.log("Searched data -->", data);
  
    //   // GPT search Api call
    //   const result = await openai.chat.completions.create({
    //     messages: [{role:'user', content:{data}}],
    //     model: 'gpt-3.5-turbo',
    //   });

    //   console.log("GPT Result --->", result);

    // }
    // catch(err){
    //   console.log("Error occured at GPT Search --->", err);
    // }

    console.log("data before split", data);

    const searchQuery = data?.search.split(' ').filter((word) => word !== "movie").join('+');
    console.log("Search query", searchQuery);
    
    dispatch(getMovieBySearch(searchQuery));

    console.log("value of movie slice", searchMovie);
    console.log("type of search movie", typeof(searchMovie));

  }

  // trigger on first render
  useEffect(() => {
    reset({
      search:""
    })
  },[isSubmitSuccessful])

  return (
    <div className='w-[50%] ' >

          {/* search form */}
          <form className='p-1 flex items-center gap-4 justify-center '
            onSubmit={handleSubmit(submitHandler)}
          >
            <input 
              type="text"
              placeholder='Enter the name of Movie'
              {...register("search")}
              className='outline-none p-3 rounded-lg text-white text-base font-medium bg-[#161D29] w-[60%] '
            />

            {/* submit button */}
            <button
              type='submit'
              className='text-white rounded-lg text-base font-medium py-2 px-5 bg-red-700 '
            >
              Search
            </button>
          </form>
        </div>
  )
}

export default SearchForm;