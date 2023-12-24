import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {getMovieInfo} from '../services/operations/searchMovieAPI'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Common/Navbar';

const MovieInfo = () => {

    const { id} = useParams();
    const dispatch = useDispatch();

    // fetching data from slice
    const { movieInfo} = useSelector((state) => state.search);
   
    useEffect(() => {
        dispatch(getMovieInfo(id));
    }, [])

  return (
    <div className='h-screen w-screen bg-no-repeat bg-cover' style={{ backgroundImage : `url(https://image.tmdb.org/t/p/w500/${movieInfo?.backdrop_path})`}} >
        <div className='w-full h-full bg-gradient-to-b from-black via-black to-black opacity-80' >
            <Navbar/>
            <div className='w-11/12 max-w-7xl mx-auto h-full' >
                {/* image */}
                <img src={`https://image.tmdb.org/t/p/w500/${movieInfo?.poster_path}`} alt="Movie Image" className='w-[300px]' />
            </div>
        </div>
    </div>
  )
}

export default MovieInfo;