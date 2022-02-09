import React, { useState } from "react"
import axios from 'axios'
import './LoginForm.css'
import bgwhite from './bgwhite.png'
import { Link } from "react-router-dom"


const LoginForm = ({ checkLoginSuccess }) => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputValue = (key) => (e) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value })
    }
    const loginBtnClick = () => {
        const { email, password } = loginInfo
        if(!email) {
            setErrorMessage('E-mail을 입력하세요.')
            return
        } else if(!password) {
            setErrorMessage('비밀번호를 입력하세요.')
        }

        axios({
            method: 'POST',
            url: 'http://localhost:8085/users/login',
            headers: { 'Content-Type': 'application/json', withCredentials: true },
            data: {
                email: email,
                password: password
            }
        }).then((res) => {
            console.log(res.data)
            const { email, password } = res.data.data
            checkLoginSuccess({
                email,
                password
            })
        })
    }

    return (
        <div>
            <div className='Center-logo-div'>
                <img src={bgwhite} className='Center-logo' />
              </div>
                <div className='Center-login-input'>
                  <input
                    className='Login-input'
                    placeholder='E-mail'
                    type="text"
                    onChange={handleInputValue('email')}
                  />
                </div>
                <div className='Center-login-input'>
                  <input
                    className='Login-input'
                    placeholder='PW'
                    type="password"
                    onChange={handleInputValue('password')}
                  />
                </div>
                
                <div className='Center-login-input'>             
                  <button 
                    className="Login-button"
                    onClick={loginBtnClick}
                    >
                    Login
                  </button>           
                </div>
                <div className='Center-login-input'>             
                  <button 
                    className="Signup-button"
                    onClick={loginBtnClick}
                    >
                    Sign Up
                  </button>           
                </div>
                <div className='Center-login-input'>
                  <p className="Login-OR">
                    ------------------- 또는 -------------------
                  </p>
                </div>
                <div className='Social-login-button'>
                  <button className="Naver-button">
                    NAVER 로그인
                  </button>
                </div>
                <div className='Social-login-button'>
                  <button className="Google-button">
                    GOOGLE 로그인
                  </button>
                </div>
                <div className='Social-login-button'>
                  <button className="Kakao-button">
                    KAKAO 로그인
                  </button>
                </div>
        </div>
    )
}

export default LoginForm