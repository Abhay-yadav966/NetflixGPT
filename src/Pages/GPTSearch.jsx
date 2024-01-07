import React from 'react'
import Navbar from '../components/Common/Navbar';
import { useForm } from 'react-hook-form';


const GPTSearch = () => {

  // form hook
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  return (
    <div className='relative' >
        <Navbar/>
        
        {/* background image */}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background image" 
          className='bg-cover w-screen'
        />

        <div className='absolute top-0 w-full border border-red-500' >

          {/* search form */}
          <form>
            <input 
              type="text"
              placeholder=''
              className=''
            />
          </form>
        </div>
    </div>
  )
}

export default GPTSearch;