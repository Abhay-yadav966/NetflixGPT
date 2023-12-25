import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchMovie:null,
    movieInfo:null,
}

export const searchSlice = createSlice({
    name:"searchMovie",
    initialState:initialState,
    reducers:{
        setSearchMovie:( state, action) => {
            state.searchMovie = action.payload;
        },
        setMovieInfo:( state, action) => {
            state.movieInfo = action.payload;
        }
    }
})

export const { setSearchMovie, setMovieInfo} = searchSlice.actions;
export default searchSlice.reducer;