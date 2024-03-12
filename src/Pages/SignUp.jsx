import React from 'react'
import Tamplate from '../components/Common/Tamplate';

const SignUp = () => {
  return (
    <div className='w-full h-screen overflow-hidden' >
        {/* tamplate */}
        <Tamplate
            isLogin={false}
        />
    </div>
  )
}

export default SignUp;