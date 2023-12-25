import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {getMovieInfo} from '../services/operations/searchMovieAPI'
import { useDispatch, useSelector } from 'react-redux';

const MovieInfo = () => {

    const { id} = useParams();
    const dispatch = useDispatch();

    // fetching data from slice
    const { movieInfo} = useSelector((state) => state.search);

    console.log("Movie info -->", movieInfo);
   
    useEffect(() => {
        dispatch(getMovieInfo(id));
    }, [])

  return (
    <div>

    </div>
  )
}

export default MovieInfo;