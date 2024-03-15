import React, { useState } from 'react'
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import {sendOpt} from '../../../services/operations/authAPI'
import { useSelector } from 'react-redux';
import {signUp} from '../../../services/operations/authAPI'

const VerifyEmailField = () => {

    const navigate = useNavigate();

    // fetch data from slice
    const {signUpData} = useSelector((state) => state.auth); 

    // state variable
    const [otp, setOtp] = useState(null);

    // fn
    const handleSubmit = () => {
      console.log("otp -->", otp);
      const {fullName, email, password} = signUpData;
      signUp( fullName, email, password, otp, navigate);
    }

    // fn
    const handleResend = () => {
      const {email} = signUpData;
      sendOpt(email, navigate);
    }

  return (
    <div className='flex flex-col gap-5 font-inter ' >

        <div className='flex flex-col gap-3' >
            <h3 className='font-semibold font-inter text-4xl text-[#F1F2FF] ' >Verify email</h3>
            <p className='font-inter text-[#AFB2BF] font-normal text-sm ' >A verification code has been sent to you. Enter the code below</p>
        </div>

        {/* otp feild */}
        <div>
          <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className='text-white' >-</span>}
              renderInput={(props) => <input {...props} 
                placeholder=''
                className='bg-[#161D29] mx-3 p-1 rounded-lg text-white text-2xl '
              />}
          />
        </div>

        {/* button */}
        <button
          type='button'
          onClick={handleSubmit}
          className='font-medium text-base text-white bg-[#E50914] rounded-lg p-2'
        >
          Verify email
        </button>

        {/* buttons */}
        <div className='flex items-center justify-between' >

          {/* login btn */}
          <button
            type='button'
            onClick={() => navigate("/")}
            className='text-white flex items-center gap-1 text-sm'
          >
            <FiArrowLeft fontSize={16} />
            Back to login
          </button>

          {/* resend otp */}
          <button
            type='button'
            onClick={handleResend}
            className='text-[#47A5C5] flex items-center gap-1 text-sm '
          >
            <GiBackwardTime fontSize={18} />
            Resend it
          </button>
        </div>
    </div>
  )
}

export default VerifyEmailField;