import React, { useState } from 'react'
import LogoutModal from '../modals/LogoutModal'

const MainPage = ({ isModal, logout }) => {

    const main = '여기는 메인페이지'

    return (
        <div>
            {
            isModal 
            ? <LogoutModal 
                logout={logout}
              />
            : main
            } 
        </div>
    )
}

export default MainPage