import { Button, TextField } from '@mui/material';
import React from 'react'
import { sendLoginSignupOtp } from '../../../State/AuthSlice';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../../State/Store';

const RegisterForm = () => {

  const dispatch=useAppDispatch();
  const formik=useFormik({
        initialValues:{
          email:"",
          otp:"",
          fullName:"",
        },
        onSubmit:(values)=>{
          console.log("form data ",values)
        }
      })
  
      const handleSendOtp=()=>{
          dispatch(sendLoginSignupOtp({email:formik.values.email}))
        }

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-[#00927c] pb-8">Signup</h1>

      <div className="space-y-5">
        <TextField fullWidth name='email' label="Email"
        onChange={formik.handleChange} onBlur={formik.handleBlur} 
        error={formik.touched.email && Boolean(formik.errors.email)}
   helperText={formik.touched.email && formik.errors.email}/>
        
        {true && <div className='space-y-5'>
          <div className="space-y-2">
            <p className='font-medium text-sm opacity-60'>Enter OTP sent to your email</p>
          <TextField fullWidth name='otp' label="OTP"
            onChange={formik.handleChange} onBlur={formik.handleBlur} 
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}/>

            <TextField fullWidth name='fullName' label="Full Name"
        onChange={formik.handleChange} onBlur={formik.handleBlur} 
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}/>
          </div>

          </div>}
          {false && <Button onClick={handleSendOtp} variant='contained' fullWidth sx={{py:"11px"}}>
            Send OTP
          </Button>}
          <Button onClick={()=>formik.handleSubmit()} variant='contained' fullWidth sx={{py:"11px"}}>
            Signup
          </Button>
      </div>

    </div>
  )
}

export default RegisterForm
