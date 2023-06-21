import React, { useEffect, useState } from "react";
import ToDoItems from "./ToDoItems";
import ToDoApi from "../apis/ToDoApi";

function ToDoList({todo, setTodo}) {
    //console.log(todo)
    
    return(
        <div className="todoList">
            {
            todo.map(function(a,i){
                return(
                    <ToDoItems key={todo[i].id}  todo={todo} a={a} i={i} setTodo={setTodo}/>
                )  
            })
            }
            
        </div>
    )
}
export default ToDoList;