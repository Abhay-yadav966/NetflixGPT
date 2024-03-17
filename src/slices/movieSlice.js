import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies:[],
}

export const movieSlice = createSlice({
    name:"movie",
    initialState:initialState,
    reducers:{
        setNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const { setNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;