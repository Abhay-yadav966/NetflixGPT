import React from 'react'
import Tamplate from '../components/Common/Tamplate';


const Login = () => {
  return (
    <div className='h-screen w-full overflow-hidden ' >

      {/* Tamplate */}
      <Tamplate isLogin={true} verify={false} />

    </div>
  )
}

export default Login;