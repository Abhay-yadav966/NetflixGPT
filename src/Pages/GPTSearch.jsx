import React, { useEffect } from 'react'
import Navbar from '../components/Common/Navbar';
import { useForm } from 'react-hook-form';


const GPTSearch = () => {

  // form hook
  const {
    register,
    handleSubmit,
    reset,
    formState:{isSubmitSuccessful},
  } = useForm();

  // submit fn.
  const submitHandler = (data) => {
    console.log("Searched data -->", data);
  }

  // trigger on first render
  useEffect(() => {
    reset({
      search:""
    })
  },[isSubmitSuccessful])

  return (
    <div className='relative' >
        <Navbar/>
        
        {/* background image */}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background image" 
          className='bg-cover w-screen'
        />

        <div className='absolute top-44 left-[50%] translate-x-[-50%] w-[50%] ' >

          {/* search form */}
          <form className='p-1 flex items-center gap-4 justify-center '
            onSubmit={handleSubmit(submitHandler)}
          >
            <input 
              type="text"
              placeholder='What would you like to watch today?'
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
    </div>
  )
}

export default GPTSearch;