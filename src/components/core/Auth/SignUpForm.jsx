import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import {setSignUpData} from '../../../slices/authSlice'
import {sendOpt} from '../../../services/operations/authAPI'
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();


    // sign up handler
    const submitSignUp = (data) => {
        dispatch(setSignUpData(data));

        const email = data.email;
        sendOpt(email, navigate);
    }

  return (
    <div className='flex flex-col gap-8' >
        <h3 className='text-[#FFFFFF] font-semibold text-3xl ' >Sign Up</h3>

        <form
            onSubmit={handleSubmit(submitSignUp)}
            className='flex flex-col gap-4 '
        >
            {/* full name */}
            <label>
                <input
                    type="text"
                    placeholder='Full Name'
                    {...register("fullName", {required:true})}
                    className='bg-[#333333] px-5 py-3 rounded outline-none text-white w-full'
                />

                {/* error */}
                {
                    errors.fullName && (
                        <p className='text-[#E87C08] text-sm ' >Please enter full name</p>
                    )
                }
            </label>

            {/* email */}
            <label>
                <input 
                    type="email"
                    placeholder='Email Address'
                    {...register("email", {required:true})}
                    className='bg-[#333333] px-5 py-3 rounded outline-none text-white w-full'
                />

                {/* error */}
                {
                    errors.email && (
                        <p  className='text-[#E87C08] text-sm ' >Please enter a valid email address</p>
                    )
                }    
            </label>
            
            {/* password */}
            <label>
                <input 
                    type="text"
                    placeholder='Password'
                    {...register("password", {required:true})}
                    className='bg-[#333333] px-5 py-3 rounded outline-none text-white w-full'
                />

                {
                    errors.password && (
                        <p className='text-[#E87C08] text-sm ' >Please enter a password</p>
                    )
                }

            </label>


            {/* button */}
            <button 
                type='submit'
                className='bg-[#E50914] text-white font-medium py-3 rounded mt-6 '
            >
                Sign Up
            </button>

        </form>
    </div>
  )
}

export default SignUpForm