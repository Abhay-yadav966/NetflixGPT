import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { setSearchMovie} from '../../slices/searchMovieSlice'


// search movie
export const getMovieBySearch = (searchQuery) => {

    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector("GET", "https://api.themoviedb.org/3/search/movie?query=" + searchQuery + "&api_key=" + process.env.REACT_APP_TMDB_API_KEY)
    
            console.log("result", response?.data?.results);
    
            // data comming is empty
            if( !response?.data?.results.length ){
                throw new Error("No Search Found");
            }
    
            dispatch(setSearchMovie(response?.data?.results[0]));
    
            toast.success("Movie Got");
        }
        catch(err){
            console.log("Error occured at ---->", err); 
            toast.error("No Search Found");
        }
        toast.dismiss(toastId);
    }
}

// mvoie info
export const getMovieInfo = (id) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector("GET", `https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

            console.log("Response --->", response);
        }
        catch(err){
            console.log("Error Occured at Movie Info -->", err);
            toast.error("Details not found");
        }
        toast.dismiss(toastId);
    }
}