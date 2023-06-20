import axios from "axios";

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/todos';

const access_token = localStorage.getItem("access_token");
//console.log(access_token)

const ToDoApi = axios.create({
    baseURL : BASE_URL,
    headers : {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type':'application/json'
    } 
}); 
export default ToDoApi;