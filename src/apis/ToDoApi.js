import axios from "axios";

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/todos';

const ToDoApi = axios.create({
    baseURL : BASE_URL,
}); 
export default ToDoApi;

ToDoApi.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token');

    if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
        config.headers["Content-Type"] = 'application/json'
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });