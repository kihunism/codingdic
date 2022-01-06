import React, { useState } from "react"
import axios from 'axios'
import './SignupForm.css'
import bgwhite from './bgwhite.png'

const SignupForm = () => {
    const [signupInfo, setSignupInfo] = useState({
        email: '',
        nickname: '',
        password: '',
        password_check: ''
    })

    const { email, nickname, password, password_check } = signupInfo

    const handleInputValue = (key) => (e) => {
      setSignupInfo({ ...signupInfo, [key]: e.target.value })
    }
      
    const submitClick = () => {
        
      
        axios({
          method: 'POST',
          url: 'http://localhost:8085/users/signup',
          headers: { 'Content-Type': 'application/json', withCredentials: true },
          data: {
            email,
            password,
            password_check,
            nickname,
          },
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
      }
    
        return (
            <div >
                {/* <input 
                className="ex"
                placeholder="email"
                type="text"
                onChange={handleInputValue('email')}
                />
                <input 
                className="ex"
                placeholder="nickname"
                type="text"
                onChange={handleInputValue('nickname')}
                />
                <input 
                className="ex"
                placeholder="password"
                type="text"
                onChange={handleInputValue('password')}
                />
                <input 
                className="ex"
                placeholder="password_check"
                type="text"
                onChange={handleInputValue('password_check')}
                />
                <button onClick={submitClick}>
                Submit
                </button> */}
            </div>
        )
}

export default SignupForm