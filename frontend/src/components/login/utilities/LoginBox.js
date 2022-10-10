import React from 'react'
import TextField from './TextField'
import DropDown from './DropDown'
import LoginButton from './LoginButton'

const LoginBox = () => {
  return (
    <div className='login-box'>
        <h2>Login</h2>
        <TextField type={"text"} placeholder={"Email"}/>
        <TextField type={"password"} placeholder={"Password"}/>
        <DropDown />
        <LoginButton text={"login"}/>
    </div>
  )
}

export default LoginBox