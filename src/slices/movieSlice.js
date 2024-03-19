import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies:[],
    hindiMovies:[],
    popularMovies:[],
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
        }
    }
})

export const { setNowPlayingMovies, setHindiMovies, setPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;