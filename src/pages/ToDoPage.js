// 투두 페이지

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToDoList from "../components/ToDoList.js";
import ToDoApi from "../apis/ToDoApi.js";
import Header from "../components/Header.js";
import '../css/ToDo.css';

function ToDoPage() {
    const navigate = useNavigate();

    const [todoInput, setTodoInput] = useState('');
    const [todo, setTodo] = useState([]);

    

    //console.log(todo)

    useEffect(() => {

        if(!localStorage.getItem('access_token')){
            navigate('/login');
        };

        ToDoGet();    
    },[]);

    
    // 투두 입력
    const onChangeToDo = (e) => {
        setTodoInput(e.target.value);
    }

    // 투두 추가
    const onClickToDo = (e) => {
        ToDoPost();
        setTodoInput('');
    };

    // 투두 POST
    const ToDoPost = () => {
        ToDoApi.post("", {
            todo: todoInput
        }).then(function(response) {
            if(response.status == 201) {
                //console.log("POST", response.data);
                setTodo([...todo, response.data])
            }
        }).catch(function(error) {
            alert("error");
        })
    };

    // 투두 GET
    const ToDoGet = () => {
        ToDoApi.get("").then(function(response) {
            if(response.status == 200) {
                //console.log("GET", response.data);
                setTodo(response.data);
            }
        }).catch(function(error) {
            console.log(error.response)
        })
    };

    
    return(
        <div>
            <Header></Header>
            <div className="todoDiv">
                <h2 className="todoText">TODO</h2>
                <div className="todoAdd">
                    <input data-testid="new-todo-input"  className="todoInput" value={todoInput} onChange={onChangeToDo}/>
                    <button data-testid="new-todo-add-button"  className="todoAddButton"  onClick={onClickToDo}>추가</button>
                </div>

                <ToDoList todo={todo} setTodo={setTodo} />
            </div>
        </div>
    )
}
export default ToDoPage;