import React from 'react'
import Tamplate from '../components/Common/Tamplate';

const VerifyEmail = () => {
  return (
    <div className='h-screen w-full overflow-hidden ' >
        <Tamplate
            verify={true}
            isLogin={false}
        />
    </div>
  )
}

export default VerifyEmail;