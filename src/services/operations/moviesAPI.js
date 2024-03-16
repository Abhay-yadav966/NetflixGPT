
import {apiConnector} from '../apiConnector'
import {tmdbMoviesEndpoints} from '../apis'

const tmdb_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWYwZDA0Y2FiOTVmNDNjZjBjYWFhNGY4NWVjZDkzNCIsInN1YiI6IjY1ZjU2NWMyYjk3NDQyMDE3ZGZhNTk2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-zk5HKNUNCOznwltWVX8A_b1u6fLZNqetmikeV2tu0"

export const getNowPlayingMovies = async () => {
    try{
        console.log("API --->", tmdbMoviesEndpoints.NOWPLAYING_API);
        const response = await apiConnector("GET", tmdbMoviesEndpoints.NOWPLAYING_API, null, {
            "Authorization":`Bearer ${tmdb_token}`
        })

        console.log("now playing movie api -->", response);
    }
    catch(err){
        console.log("Error Occured in Now Playing API ----->", err);
    }
    return;
}