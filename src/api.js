import axios from "axios";

const baseURL = "https://www.pre-onboarding-selection-task.shop";

export const signUp = async (data) => {
    try {
        const response = await axios.post(
            `${baseURL}/auth/signup`,
            { email: data.email, password: data.password },
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.status;
    } catch (e) {
        console.log(e.response.message);
    }
};

export const signin = async (data) => {
    try {
        const response = await axios.post(
            `${baseURL}/auth/signin`,
            { email: data.email, password: data.password },
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        if (response.status === 200) {
            const { access_token } = response.data;
            localStorage.setItem("token", access_token);
            return access_token;
        }
    } catch (e) {
        return e;
    }
};

export const createTodo = async (todo) => {
    const data = { todo };
    try {
        const response = await axios.post(`${baseURL}/todos`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTodos = async () => {
    try {
        const response = await axios.get(`${baseURL}/todos`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/todos/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.status;
    } catch (e) {
        console.log(e);
    }
};

export const updateTodo = async (data, id) => {
    console.log(data);
    try {
        const response = await axios.put(`${baseURL}/todos/${id}`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
};
