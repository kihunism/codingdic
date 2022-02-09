import React, { PureComponent, useState } from 'react'


const LogoutModal = ({ logout }) => {
    const yesBtnClick = () => {
        logout()
    }

    return (
        <div className='Modal'>
            <div>
                <span>
                    X
                </span>
            </div>
            <div>
                로그아웃을 하시겠습니까?
            </div>
            <div>
                <button 
                    className='Modal-logout-btn'
                    onClick={yesBtnClick}
                >
                    예
                </button>
                <button 
                    className='Modal-logout-btn'
                
                >
                    아니오
                </button>
            </div>
        </div>
    )
}

export default LogoutModal