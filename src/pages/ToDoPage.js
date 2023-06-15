// 투두 페이지

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ToDoPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('access_token')){
            navigate('/login');
        }
    });

    return(
        <div>
            투두
        </div>
    )
}
export default ToDoPage;