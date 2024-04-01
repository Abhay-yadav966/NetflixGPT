import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const TrailerDetails = ({title, desc}) => {
  return (
    <div className='absolute flex flex-col gap-1 md:gap-5 top-[35%] sm:top-[30%] px-10 w-screen' >
        <h1 className='text-white text-3xl sm:text-5xl md:text-6xl font-semibold' >{title}</h1>
        <p className='text-white text-sm sm:text-base md:text-lg w-[100%] sm:w-[80%] md:w-[40%] ' >{desc}</p>

        {/* buttons */}
        <div className='flex items-center gap-2' >
            <button className='flex items-center gap-1 sm:gap-2 bg-white text-black font-semibold px-4 sm:px-6 py-2 rounded-md hover:bg-opacity-80' >
                <FaPlay className=' text-[15px] sm:text-[23px]' />
                Play
            </button>

            <button className='flex items-center gap-1 sm:gap-2 bg-gray-500 text-white font-semibold px-4 sm:px-6 py-2 rounded-md hover:bg-opacity-70' >
                <IoMdInformationCircleOutline className=' text-[21px] sm:text-[28px]' />
                More Info
            </button>
        </div>
    </div>
  )
}

export default TrailerDetails;