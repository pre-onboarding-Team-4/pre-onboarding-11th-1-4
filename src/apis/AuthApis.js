import axios from "axios";

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/auth/';

const AuthApi = axios.create({
    baseURL : BASE_URL,
    headers : {
        'Content-Type':'application/json'
    } 
}); 
export default AuthApi;