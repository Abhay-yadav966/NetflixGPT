import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies:[],
    hindiMovies:[],
    popularMovies:[],
    topRatedMovies:[],
}

export const movieSlice = createSlice({
    name:"movie",
    initialState:initialState,
    reducers:{
        setNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        setHindiMovies:(state, action) => {
            state.hindiMovies=action.payload;
        },
        setPopularMovies:(state, action) => {
            state.popularMovies=action.payload;
        },
        setTopRatedMovies:(state, action) =>{
            state.topRatedMovies=action.payload;
        }
    }
})

export const { setNowPlayingMovies, setHindiMovies, setPopularMovies, setTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;