import React, { useEffect, useState } from "react";
import ToDoApi from "../apis/ToDoApi";

function ToDoItems({todo, setTodo, a, i}) {
    const [modiButton, setModiButton] = useState(false);
    const [modiInput, setModiInput] = useState(a.todo);
    const [checked, setChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(a.isCompleted);

    const onChangeModiInput = (e) => {
        setModiInput(e.target.value);
    }


    const onClickDelete = () => {
        ToDoDelete();
    }

    const onClickModify = () => {
        ToDoPut();
        setModiButton(false);
        setIsChecked(checked);
        
    }

    const onChangeCheckBox = (e) => {
        if(e.target.checked == true) {
            setChecked(true);
            
        }else{
            setChecked(false);
        }
    }


    // 투두 PUT
    const ToDoPut = () => {
        ToDoApi.put("/" + a.id, {
            todo: modiInput,
            isCompleted: checked
        }).then(function(response) {
            if(response.status == 200) {
                ToDoGet();
            }
        }).catch(function(error) {
            alert("error")
        })

    }

    // 투두 DELETE
    const ToDoDelete = () => {
        ToDoApi.delete("/" + a.id).then(function(response) {
            if(response.status == 204) {
                ToDoGet();
            }
        }).catch(function(error) {
            alert("error");
        })
    }

    // 투두 GET
    const ToDoGet = () => {
        ToDoApi.get("").then(function(response) {
            if(response.status == 200) {
                setTodo(response.data);
            }
        }).catch(function(error) {
            alert("error");
        })
    };

    return(
        <div>
            {modiButton == false ? (
                <li className="todoItem">
                    <label>
                        <input type="checkbox" disabled checked={isChecked}/>
                        <span>{a.todo}</span>
                    </label>
                    
                    <button data-testid="modify-button" className="modiButton" onClick={()=>{
                        setModiButton(true);
                    }}>수정</button>
                    <button data-testid="delete-button" className="deleteButton" onClick={onClickDelete}>삭제</button>
                    
               </li>
            ) : (
                <li className="todoItem">
                    <label>
                        <input type="checkbox" onChange={onChangeCheckBox}/>
                        <input data-testid="modify-input" className="modiInput" value={modiInput} onChange={onChangeModiInput}/>
                    </label>
                    <button data-testid="submit-button" className="submitButton" onClick={onClickModify}>제출</button>   
                    <button data-testid="cancel-button" className="cancelButton" onClick={()=>{
                        setModiButton(false);   
                    }}>취소</button>
                </li>
            )}
            
        </div>
    )
}
export default ToDoItems;