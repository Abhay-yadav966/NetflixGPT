
const BASE_URL = process.env.REACT_APP_API_URL;

console.log("url", BASE_URL)

export const authEndpoints = {
    SENDOTP_API : BASE_URL + "/auth/sendotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    LOGIN_API : BASE_URL + "/auth/login"
}

export const tmdbMoviesEndpoints = {
    // NOWPLAYING_API:"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
    NOWPLAYING_API:"https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=en-US&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2024&with_original_language=hi"
}