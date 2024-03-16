import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {login} from '../../../services/operations/authAPI'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // form
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm();


    // submit fn
    const submitHandler = (data) => {
        dispatch(login(data, navigate));
    }


  return (
    <div className='flex flex-col gap-8' >
        {/* heading */}
        <h3 className='text-[#FFFFFF] font-semibold text-3xl ' >Sign In</h3>

        {/* form */}
        <form
            onSubmit={handleSubmit(submitHandler)} 
            className='flex flex-col gap-4 '
        >

            {/* email */}
            <label className='flex flex-col gap-1' >
                <input 
                    type="email"
                    placeholder='Email Address'
                    {...register("email", {required:true})}
                    className='bg-[#333333] px-5 py-3 rounded outline-none text-white w-full '
                />

                {/* errors */}
                {
                    errors.email && (
                        <p className='text-[#E87C08] text-sm ' >Please enter a valid email address</p>
                    )
                }
            </label>

            {/* password */}
            <label className='flex flex-col gap-1' >
                <input 
                    type="text"
                    placeholder='Password'
                    {...register("password", {required:true})}
                    className='bg-[#333333] px-5 py-3 rounded outline-none text-white w-full '
                />

                {/* error */}
                {
                    errors.password && (
                        <p className='text-[#E87C08] text-sm '  >Please enter a password</p>
                    )
                }
            </label>

            {/* button */}
            <button
                type='submit'
                className='bg-[#E50914] text-white font-medium py-3 rounded mt-6 '
            >
                Sign In
            </button>
        </form>

        {/* link */}
        <Link to={"/signup"} >
            <p className='text-[#737373] mt-2 ' >New to Netflix? <span className='text-white' >Sign up now.</span></p>
        </Link>
    </div>
  )
}

export default LoginForm