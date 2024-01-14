import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchMovie:[],
}

export const searchSlice = createSlice({
    name:"searchMovie",
    initialState:initialState,
    reducers:{
        setSearchMovie:( state, action) => {
            state.searchMovie = action.payload;
        }
    }
})

export const { setSearchMovie} = searchSlice.actions;
export default searchSlice.reducer;