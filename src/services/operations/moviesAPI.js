
import {apiConnector} from '../apiConnector'
import {tmdbMoviesEndpoints} from '../apis'
import {setNowPlayingMovies, setHindiMovies, setPopularMovies} from '../../slices/movieSlice'

export const tmdb_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWYwZDA0Y2FiOTVmNDNjZjBjYWFhNGY4NWVjZDkzNCIsInN1YiI6IjY1ZjU2NWMyYjk3NDQyMDE3ZGZhNTk2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-zk5HKNUNCOznwltWVX8A_b1u6fLZNqetmikeV2tu0"


// Now Playing
export const getNowPlayingMovies = () => {
    return async (dispatch) => {
        try{
            console.log("API --->", tmdbMoviesEndpoints.NOWPLAYING_API);
            const response = await apiConnector("GET", tmdbMoviesEndpoints.NOWPLAYING_API, null, {
                "Authorization":`Bearer ${tmdb_token}`
            })
    
            console.log("Now playing movie api -->", response);

            // set movie data into movie slice
            dispatch(setNowPlayingMovies(response?.data?.results));
        }
        catch(err){
            console.log("Error Occured in Now Playing API ----->", err);
        }
    }
}


// hindi movies 
export const getHindiMovies = () => {
    return async (dispatch) => {
        try{
            const response = await apiConnector("GET", tmdbMoviesEndpoints.HINDIMOVIE_API, null, {
                "Authorization":`Bearer ${tmdb_token}`
            });

            console.log("Hindi movies data --->", response);

            dispatch(setHindiMovies(response?.data?.results));
        }
        catch(err){
            console.log("Error occured at hindi movies api", err);
        }
    }
}

// popular movies
export const popularMovies = () => {
    return async (dispatch) => {
        try{
            const response = await apiConnector("GET", tmdbMoviesEndpoints.POPULAR_API, null, {
                "Authorization":`Bearer ${tmdb_token}`
            });

            console.log("Popular movies Api data -->", response);

            dispatch(setPopularMovies(response?.data?.results));
        }
        catch(err){
            console.log("Error occured at popular movies -->", err);
        }
    }
}