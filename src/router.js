import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./Page/Auth/SignIn";
import SignUp from "./Page/Auth/SignUp";
import ToDoList from "./Page/ToDos/ToDoList";

const routes = [
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Navigate to="/signin" />,
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/todo",
                element: <ToDoList />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
