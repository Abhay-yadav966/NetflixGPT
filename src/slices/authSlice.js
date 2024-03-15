import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signUpData : null,
}

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setSignUpData:(state, action) => {
            state.signUpData = action.payload;
        }
    }
})

export const { setSignUpData } = authSlice.actions;
export default authSlice.reducer;