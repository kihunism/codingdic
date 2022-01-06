import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LoginNavbar from './Components/navbar/LoginNavbar'
import LoginForm from './Components/users/LoginForm'
import MainNavbar from './Components/navbar/MainNavbar'
import MainPage from './Components/users/MainPage'
import React, { useState } from 'react'

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [loginInfo, setLoginInfo] = useState(null)
  const [isModal, setIsModal] = useState(false)
  
  const checkLoginSuccess = (loginInfo) => {
    setIsLogin(true)
    setLoginInfo(loginInfo)
    // loginInfo = { email, password }
    console.log('login Success', loginInfo)
  }

  const checkLogoutSuccess = () => {
    setIsModal(true)
  }

  const logout = () => {
    setIsLogin(false)
  }

  return (
    <Router>
      {isLogin
      ? <MainNavbar 
          checkLogoutSuccess={checkLogoutSuccess}
        />
      : <LoginNavbar /> }

      {isLogin
      ? <MainPage 
          isModal={isModal}
          logout={logout}
        />
      : <LoginForm 
          checkLoginSuccess={checkLoginSuccess}
        /> }
    </Router>
  )
}

export default App
