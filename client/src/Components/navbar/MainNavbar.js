import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './MainNavbar.css'
import finallogo from './finallogo.png'
import LogoutModal from '../modals/LogoutModal'

const MainNavbar = ({ checkLogoutSuccess }) => {

    
    return (
        <div>
            <header className='MainNavbar'>
                <img src={finallogo} className='MainNavbar-logo' />   
                    <button className='Mypage-btn'>
                        MyPage
                    </button>
                    <button 
                        className='Logout-btn'
                        onClick={checkLogoutSuccess}
                    >
                        Logout
                    </button>
            </header>
        </div>
    )
}

export default MainNavbar