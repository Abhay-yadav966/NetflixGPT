import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {getMovieInfo} from '../services/operations/searchMovieAPI'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Common/Navbar';

const MovieInfo = () => {

    const { id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // fetching data from slice
    const { movieInfo} = useSelector((state) => state.search);
   
    console.log("movie info -->", movieInfo);

    useEffect(() => {
        dispatch(getMovieInfo(id, navigate));
    }, [])

  return (
    <div className='h-screen w-screen bg-no-repeat bg-cover' style={{ backgroundImage : ` ${movieInfo?.backdrop_path !== null ? `url(https://image.tmdb.org/t/p/w500/${movieInfo?.backdrop_path})` : `url(https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`}`}} >
        <div className='w-full h-full bg-gradient-to-b from-black via-black to-black opacity-80 flex items-end ' >
            <Navbar/>
            <div className='w-11/12 max-w-7xl mx-auto h-[calc(100%-150px)] px-5 flex items-center gap-28' >
                {/* image */}
                <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movieInfo?.poster_path}`} alt="Movie Image" className='w-[300px] h-[410px] bg-cover rounded-2xl ' />

                {/* details */}
                <div className='flex flex-col gap-10' >
                    {/* movie name & release year*/}
                    <div className='flex items-end gap-4' >
                        <h1 className='text-white font-extrabold text-6xl ' >{movieInfo?.title}</h1>
                        <h3 className='text-white text-xl font-normal ' >{"("}{movieInfo?.release_date.split("-")[0]}{")"}</h3>
                    </div>

                    {/* release date */}
                    <div className='flex gap-10 items-center ' >
                        <p className='text-white font-medium' >Date:<span> {movieInfo?.release_date}</span></p>

                        {/* Genure */}
                        <div className='flex gap-2' >
                            <p className='text-white font-bold text-lg' >Genure:</p>

                            {
                                movieInfo?.genres.map(( data ,index) => (
                                    <p key={index} className='text-white bg-red-500 rounded-full text-center py-1 px-2' >{data?.name}</p>
                                ))
                            }
                        </div>
                    </div>

                    {/* runtime and Rating */}
                    <div className='flex gap-10' >
                        <p className='text-white font-medium' >Runtime: <span>{Math.round((movieInfo?.runtime)/60)} Hrs</span></p>

                        <p className='text-white font-medium' >Ratings: <span>{movieInfo?.popularity}</span></p>
                    </div>

                    {/* overview */}
                    <div>
                        <h3 className='text-white text-xl font-medium' >Overview:</h3>
                        <p className='text-white text-lg font-normal ' >{movieInfo?.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieInfo;