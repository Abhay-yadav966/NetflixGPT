import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const TrailerDetails = ({title, desc}) => {
  return (
    <div className='absolute flex flex-col gap-5 top-[30%] left-10' >
        <h1 className='text-white text-6xl font-semibold' >{title}</h1>
        <p className='text-white text-lg w-[40%] ' >{desc}</p>

        {/* buttons */}
        <div className='flex items-center gap-2' >
            <button className='flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded-md ' >
                <FaPlay size={26} />
                Play
            </button>

            <button className='flex items-center gap-2 bg-gray-500 text-white font-semibold px-6 py-2 rounded-md ' >
                <IoMdInformationCircleOutline size={30} />
                More Info
            </button>
        </div>
    </div>
  )
}

export default TrailerDetails;