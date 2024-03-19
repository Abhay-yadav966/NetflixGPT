
const BASE_URL = process.env.REACT_APP_API_URL;

console.log("url", BASE_URL)

export const authEndpoints = {
    SENDOTP_API : BASE_URL + "/auth/sendotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    LOGIN_API : BASE_URL + "/auth/login"
}

export const tmdbMoviesEndpoints = {
    NOWPLAYING_API:"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    HINDIMOVIE_API:"https://api.themoviedb.org/3/discover/movie?api_key=eef0d04cab95f43cf0caaa4f85ecd934&language=en-US&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2024&with_original_language=hi",
    POPULAR_API:"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    TOPRATED_API:"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    UPCOMING_API:"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
}