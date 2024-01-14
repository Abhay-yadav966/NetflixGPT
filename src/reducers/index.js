import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import movieReducer from '../slices/movieSlice'
import searchReducer from '../slices/searchMovieSlice' 


export const rootReducer = combineReducers({
    auth:authReducer,
    movie:movieReducer,
    search:searchReducer,
})