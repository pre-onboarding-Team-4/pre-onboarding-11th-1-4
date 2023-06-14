import React, { useState } from "react";
import styled from "styled-components";

function ToDo({ todo, id, isCompleted, onDelete, onUpdate }) {
    const originData = { todo, isCompleted };
    const [isEdited, setEdited] = useState(false);
    const [editTodo, setEditTodo] = useState({
        todo,
        isCompleted,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditTodo((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const toggleEdit = () => {
        setEditTodo(originData);
        setEdited((prev) => !prev);
    };

    const handleUpdate = () => {
        onUpdate(editTodo, id);
        setEdited(false);
    };

    return (
        <Item isCompleted={editTodo.isCompleted} isEdited={isEdited}>
            <label>
                <input
                    type="checkbox"
                    name="isCompleted"
                    checked={editTodo.isCompleted}
                    onChange={handleChange}
                    disabled={!isEdited}
                />
                {isEdited ? (
                    <ModifyInput
                        data-testid="modify-input"
                        name="todo"
                        onChange={handleChange}
                        value={editTodo.todo}
                    />
                ) : (
                    <span>{todo}</span>
                )}
                <ButtonContainer>
                    {isEdited ? (
                        <>
                            <Button
                                data-testid="submit-button"
                                onClick={handleUpdate}
                            >
                                제출
                            </Button>
                            <Button
                                data-testid="cancel-button"
                                onClick={toggleEdit}
                            >
                                취소
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                data-testid="modify-button"
                                onClick={toggleEdit}
                            >
                                수정
                            </Button>
                            <Button
                                data-testid="delete-button"
                                onClick={() => onDelete(id)}
                            >
                                삭제
                            </Button>
                        </>
                    )}
                </ButtonContainer>
            </label>
        </Item>
    );
}

export default ToDo;

const Item = styled.li`
    list-style-type: none;
    width: 100%;
    margin: 8px;
    border: 1px solid #c8d6e5;
    border-radius: 8px;
    padding: 8px;
    label {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span {
        text-decoration: ${(props) => props.isCompleted && `line-through`};
        color: ${(props) => props.isCompleted && `gray`};
    }
`;

const ModifyInput = styled.input`
    width: 320px;
    height: 32px;
    font-size: 16px;
    color: gray;
    border: none;
    background-color: #e2e2e2;
`;

const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: gray;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
`;
