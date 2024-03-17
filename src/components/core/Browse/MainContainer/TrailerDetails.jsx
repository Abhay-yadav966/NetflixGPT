import React from 'react'
import { FaPlay } from "react-icons/fa6";

const TrailerDetails = ({title, desc}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{desc}</p>

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