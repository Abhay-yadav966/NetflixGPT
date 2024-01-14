import { apiConnector } from "../apiConnector";


// search movie
export const getMovieBySearch = async (searchQuery) => {
    try{
        const result = await apiConnector("GET", "https://api.themoviedb.org/3/search/movie?query=" + searchQuery + "&api_key=" + process.env.REACT_APP_TMDB_API_KEY)

        console.log("result", result);
    }
    catch(err){
        console.log("Error occured at ---->", err);
    }
}