import React from 'react'
import './Login.scss'


const Login = () => {
  return (
    <div className='Login-main'>
        <div className='Login-left'>
            <div className='Login-container'>
                <div className='Login-welcome'>Welcome Back!</div>
                <div className='Login-inputFields'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name='username' placeholder='Enter Username...'/>
                </div>
                <div className='Login-inputFields'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' placeholder='Enter Password...'/>
                </div>
                <button className='Login-button'>
                    Login
                </button>
                <div className='Login-toRegister'>
                    Don't have an account?<span>Register</span>
                </div>
            </div>
        </div>
        <div className='Login-right'></div>
    </div>
  )
}

export default Login