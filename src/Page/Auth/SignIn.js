import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../api";
import styled from "styled-components";

function SignIn() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        email: "",
        password: "",
    });
    const [isValid, setValid] = useState(false);
    const [errorMessage, setError] = useState("");

    const handleAuth = (e) => {
        const { name, value } = e.target;
        setValid(true);
        setAuth((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setValid(false);
        if (!auth?.email || !auth.email.includes("@")) {
            setError("이메일 형식이 올바르지 않습니다.");
        } else if (!auth?.password || auth.password.length < 8) {
            setError("비밀번호는 최소 8자 이상이어야 합니다.");
        } else {
            setError("");
            setValid(true);
            const isSign = await signin(auth);
            if (isSign) return navigate("/todo");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            return navigate("/todo");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <h1>SIGN IN</h1>
            <form onSubmit={handleSignIn}>
                <input
                    data-testid="email-input"
                    type="text"
                    name="email"
                    onChange={handleAuth}
                />
                <input
                    data-testid="password-input"
                    type="password"
                    name="password"
                    onChange={handleAuth}
                />
                <button data-testid="signin-button" disabled={!isValid}>
                    로그인
                </button>
            </form>
            {!isValid && <span>{errorMessage}</span>}
            <StyledLink to="/signup">회원가입</StyledLink>
        </Container>
    );
}

export default SignIn;

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

const StyledLink = styled(Link)`
    box-sizing: border-box;
    display: block;
    padding: 4px 8px;
    margin: 0 auto;
    text-align: center;
    color: white;
    text-decoration: none;
`;
