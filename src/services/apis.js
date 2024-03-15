
const BASE_URL = process.env.REACT_APP_API_URL;

console.log("url", BASE_URL)

export const authEndpoints = {
    SENDOTP_API : BASE_URL + "/auth/sendotp",
}