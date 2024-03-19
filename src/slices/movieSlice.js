import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies:[],
    hindiMovies:[],
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
        }
    }
})

export const { setNowPlayingMovies, setHindiMovies } = movieSlice.actions;
export default movieSlice.reducer;