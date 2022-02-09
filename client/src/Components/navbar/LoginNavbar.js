import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './LoginNavbar.css'
import finallogo from './finallogo.png'

const LoginNavbar = () => {

    return (
        <div>
            <header className='LoginNavbar'>
                <img src={finallogo} className='LoginNavbar-logo' />
            </header>
        </div>
    )
}

export default LoginNavbar