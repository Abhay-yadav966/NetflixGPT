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
                "Authorization":`Bearer ${tmdb_token}`
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
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
        </iframe>
    </div>
  )
}

export default TrailerVideoBackground;