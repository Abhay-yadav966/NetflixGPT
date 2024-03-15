import React, { useState } from 'react'
import OTPInput from 'react-otp-input';

const VerifyEmailField = () => {

    // state variable
    const [otp, setOtp] = useState(null);

  return (
    <div>

        <div className='flex flex-col gap-3' >
            <h3 className='font-semibold font-Bebas text-3xl text-[#F1F2FF] ' >Verify email</h3>
            <p>A verification code has been sent to you. Enter the code below</p>
        </div>
        <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            placeholder='-'
            className=''
        />
    </div>
  )
}

export default VerifyEmailField;