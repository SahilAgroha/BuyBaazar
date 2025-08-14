import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Button from '@mui/material/Button'
const Auth = () => {
  const [isLogin,setIsLogin]=useState(true)
  return (
    <div className='flex justify-center h-[90vh] items-center'>
      <div className="max-w-md h-[85vh] rounded-md shadow-lg">
        <img className='w-full rounded-t-md ' src='https://imgs.search.brave.com/pYrdFi0ie6VwUOdibjCGafUGcD-BZr0n-Ilm0o08qgc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTExNDg3/My8yNTgxNi9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzI1ODE2NzA5/OC1zdG9jay1waG90/by1ibHVyLWFic3Ry/YWN0LWJhY2tncm91/bmQtY29sb3JmdWwt/Z3JhZGllbnQuanBn' alt=''/>
        <div className="mt-8 px-10">
          {isLogin ? <LoginForm/> : <RegisterForm/>}

        <div className='flex items-center gap-1 justify-center mt-5'>
          <p>{isLogin && "Don't "}have Account</p>
          <Button size='small' onClick={()=>setIsLogin(!isLogin)}>{isLogin?"Create Account":"login"}</Button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Auth
