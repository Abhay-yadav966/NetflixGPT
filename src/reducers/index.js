import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import movieReducer from '../slices/movieSlice'


export const rootReducer = combineReducers({
    auth:authReducer,
    movie:movieReducer,
})