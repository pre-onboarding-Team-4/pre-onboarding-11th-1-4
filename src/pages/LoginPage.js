// 로그인 페이지

import React, { useState, useEffect } from "react";
import AuthApi from "../apis/AuthApis";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../css/Auth.css'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [emailCheck, setEmailCheck] = useState(false);
    const [pwCheck, setPwCheck] = useState(false);

    const navigate = useNavigate();

    //console.log(email, emailCheck)
    //console.log(pw, pwCheck)

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            navigate('/todo')
        }
    });

    const onChangeEmail = (e) => {
        //console.log(e.target.value)
        let check = /@+/;
        if(check.test(e.target.value) == true){
            setEmail(e.target.value);
            setEmailCheck(true);
            
        }else{
            setEmailCheck(false);
        }
        
    }

    const onChangePw = (e) => {
        //console.log(e.target.value)
        let check = /.{8,}/;
        if(check.test(e.target.value) == true) {
            setPw(e.target.value);
            setPwCheck(true);
            
        }else{
            setPwCheck(false);
        }
    }

    const loginPost = () => {
        AuthApi.post("signin", {
            email: email,
            password: pw
        }).then(function(response) {
            // console.log(response)
            if(response.status == 200) {
                //console.log(response.data.access_token)
                localStorage.setItem("access_token", response.data.access_token);
                navigate('/todo');
            }
        }).catch(function(error) {
            alert('error');
        })
    }


    return(
        <div>
            <Header></Header>
            <div className="auth">
                <h2 className="authType">로그인</h2>
                <div>
                    <p className="email">이메일</p>
                    <input data-testid="email-input" className="emailInput" onChange={onChangeEmail}/>
                </div>

                <div>
                    <p className="pw">비밀번호</p>
                    <input data-testid="password-input" className="pwInput" onChange={onChangePw}/>
                </div>

                {emailCheck == true && pwCheck == true ? 
                (
                    <button data-testid="signin-button" className="authButton" onClick={loginPost}>로그인</button>
                ):(
                    <button data-testid="signin-button" className="authButton" disabled>로그인</button>
                )}
            </div>
            
        </div>
    )
}
export default LoginPage;