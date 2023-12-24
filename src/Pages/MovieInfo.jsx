import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {getMovieInfo} from '../services/operations/searchMovieAPI'
import { useDispatch, useSelector } from 'react-redux';

const MovieInfo = () => {

    const { id} = useParams();
    const dispatch = useDispatch();

    // fetching data from slice
    const { movieInfo} = useSelector((state) => state.search);

    console.log("value of id -->", id);
    console.log("value of backdrop image ", movieInfo?.backdrop_path)
    console.log("Movie info", movieInfo);
   
    useEffect(() => {
        dispatch(getMovieInfo(id));
    }, [])

  return (
    <div className='h-screen w-screen bg-no-repeat bg-cover' style={{ backgroundImage : `url(https://image.tmdb.org/t/p/w500/${movieInfo?.backdrop_path})`}} >
        <div className='w-full h-full bg-gradient-to-b from-black via-black to-black opacity-60' >

        </div>
    </div>
  )
}

export default MovieInfo;