import React, { useState } from 'react'
import { useEffect } from 'react'
import {apiConnector} from '../../../../services/apiConnector'
import {tmdb_token} from '../../../../services/operations/moviesAPI'

const TrailerVideoBackground = ({trailerId}) => {

    // state variable for trailer key
    const [trailerKey, setTrailerKey] = useState(null);

    const fetchTrailerVideos = async (trailerId) => {

        try{
            const response = await apiConnector("GET", `https://api.themoviedb.org/3/movie/${trailerId}/videos?language=en`, null, {
                "Authorization":`Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
            })
    
            console.log("Trailer video data --->", response);
    
            // filtering the videos and on the basis of trailer
            const filterData = response.data.results.filter((data) => data.type === "Trailer")

            // if this data does not have type trailer then we will insert static
            const Trailer = filterData.length !== 0 ? filterData[0] : response?.data?.results[0];

            setTrailerKey(Trailer?.key);
        
           console.log("filter data", Trailer);
        } 
        catch(err){
            console.log("Error occure at fetching trailer video", err);
        }
    }

    useEffect(() => {
        if(trailerId){
            fetchTrailerVideos(trailerId);
        }
    }, [trailerId]);

  return (
    <div>
        <iframe 
            className='w-screen h-screen'
            src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&playlist=${trailerKey}&mute=1&loop=1&rel=0&controls=0&disablekb=1`}
            title="YouTube video player" 
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
        </iframe>
    </div>
  )
}

export default TrailerVideoBackground;