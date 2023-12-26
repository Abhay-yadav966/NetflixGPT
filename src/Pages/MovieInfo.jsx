import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {getMovieInfo} from '../services/operations/searchMovieAPI'
import { useDispatch } from 'react-redux';

const MovieInfo = () => {

    const { id} = useParams();
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getMovieInfo(id));
    }, [])

  return (
    <div>

    </div>
  )
}

export default MovieInfo;