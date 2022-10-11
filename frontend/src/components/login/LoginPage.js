import React from 'react'
import LoginTitle from './utilities/LoginTitle'
import LoginBox from './utilities/LoginBox'

const LoginPage = () => {
  return (
    <div className='login-page'>
        <div className='login-container'>
            <LoginTitle />
            <LoginBox />
        </div>
    </div>
  )
}

export default LoginPage