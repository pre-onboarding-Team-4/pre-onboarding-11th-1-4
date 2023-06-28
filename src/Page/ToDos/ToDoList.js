import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../../api";
import ToDo from "./ToDo";
import { useNavigate } from "react-router-dom";

function ToDoList() {
    const [todo, setTodo] = useState("");
    const [toDoList, setToDoList] = useState([]);

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onChange = (e) => {
        setError("");
        setTodo(e.target.value);
    };

    const fetch = async () => {
        try {
            const todos = await getTodos();
            setToDoList(todos);
        } catch (e) {
            console.log(e);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!todo) return setError("아무것도 입력되지 않았습니다.");
        await createTodo(todo);
        fetch();
        setTodo("");
    };

    const onDelete = async (id) => {
        await deleteTodo(id);
        fetch();
    };
    const onUpdate = async (data, id) => {
        await updateTodo(data, id);
        fetch();
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return navigate("/signin");
        }
    });

    useEffect(() => {
        fetch();
    }, []);

    return (
        <Wrapper>
            <Header
                onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/signin");
                }}
            >
                <span>로그아웃</span>
            </Header>
            <Container>
                <h1>ToDo List</h1>
                <form onSubmit={onSubmit}>
                    <input
                        data-testid="new-todo-input"
                        type="text"
                        value={todo}
                        onChange={onChange}
                    />
                    <button data-testid="new-todo-add-button">추가</button>
                </form>
                <span>{error}</span>
            </Container>
            <TodoList>
                {toDoList?.map((data) => {
                    return (
                        <ToDo
                            key={data.id}
                            {...data}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    );
                })}
            </TodoList>
        </Wrapper>
    );
}

export default ToDoList;

const Wrapper = styled.div`
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.nav`
    display: flex;
    justify-content: flex-end;
    span {
        cursor: pointer;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        width: 300px;
        input {
            padding: 0.5rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 8px;
        }
        button {
            padding: 0.5rem 1rem;
            font-size: 1rem;
            background-color: black;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            :disabled {
                color: gray;
                cursor: default;
            }
        }
    }
    span {
        color: red;
    }
`;

const TodoList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
`;
