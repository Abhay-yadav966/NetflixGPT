import toast from 'react-hot-toast'
import {authEndpoints} from '../apis'
import { apiConnector } from '../apiConnector'

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