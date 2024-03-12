import React from 'react'
import Logo from '../assets/Logos-Readability-Netflix-logo.png'

const Login = () => {
  return (
    <div className='max-h-screen w-full relative' >

        {/* background image */}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background image" 
            className=' object-cover h-screen w-screen ' 
        />
        
        {/* black background */}
        <div className='absolute top-0 left-0 h-full w-full bg-[#000] opacity-[0.5]' >
        </div>

        {/* logo */}
        <img src={Logo} alt="logo" className=' absolute top-0 left-0 h-[150px] w-[270px] z-10 '/>


    </div>
  )
}

export default Login;