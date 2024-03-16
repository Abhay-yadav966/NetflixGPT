import toast from 'react-hot-toast'
import {authEndpoints} from '../apis'
import { apiConnector } from '../apiConnector'
import {setToken} from '../../slices/authSlice'

// Send OTP
export const sendOpt = async (email, navigate) => {
    const toastId = toast.loading("Loading...")
    try{
        const response = await apiConnector("POST", authEndpoints.SENDOTP_API, {email});

        if(!response?.data?.success){
            throw new Error(response?.data?.message);
        }

        toast.success("OTP Send Successfully");

        navigate("/verify-email");
    }
    catch(err){
        console.log("Error In SendOTP API ---->", err);
        toast.error("Could Not Send OTP");
    }
    toast.dismiss(toastId);
    return;    
}

// SIGN UP
export const signUp = async ( fullName, email, password, otp, navigate) => {
    console.log("entered");
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", authEndpoints.SIGNUP_API, {fullName, email, password, otp});

        if( !response?.data?.success ){
            throw new Error(response?.data?.message);
        }

        toast.success("SignUp Successfully");
        navigate("/");
    }
    catch(error){
        console.log("Error occured at SignUp -->", error);
        toast.error("SignUp Failed");
        navigate("/signup");
    }
    toast.dismiss(toastId);
    return;
}

// LOGIN
export const login = (data, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector("POST", authEndpoints.LOGIN_API, data);
            console.log("Login Response -->", response);
    
            if(!response?.data?.success){
                throw new Error(response?.data?.message);
            }
    
            // settoken in slice
            dispatch(setToken(response?.data?.token));
    
            localStorage.setItem("JWTtoken", response?.data?.token);
    
            toast.success("Login Successfully");

            // Todo navigate
            navigate("/browse")
        }
        catch(error){
            console.log("Error Occured in Login API ---->", error);
            toast.error("Login Failed");
        }
        toast.dismiss(toastId);
    }
}

// LOGOUT
export const logout = (navigate) => {
    return (dispatch) => {
        const toastId = toast.loading("Loading...");
        try{
            // remove data from local storage
            localStorage.removeItem("JWTtoken");

            // set data null in slice
            dispatch(setToken(null));

            toast.success("Logout Successfully");

            navigate("/");
        }
        catch(err){
            console.log("Error Occured in Logout --->", err);
            toast.error("Logout failed");
        }
        toast.dismiss(toastId);
        return;
    }
}