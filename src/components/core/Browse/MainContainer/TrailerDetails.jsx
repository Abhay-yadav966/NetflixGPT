import React from 'react'
import { FaPlay } from "react-icons/fa6";

const TrailerDetails = ({title, desc}) => {
  return (
    <div className='absolute' >
        <h1 className='text-white text-6xl font-semibold' >{title}</h1>
        <p className='text-white text-lg' >{desc}</p>

        {/* buttons */}
        <div>
            <button className='flex items-center' >
                <FaPlay />
                Play
            </button>

            <button>
                More Info
            </button>
        </div>
    </div>
  )
}

export default TrailerDetails;