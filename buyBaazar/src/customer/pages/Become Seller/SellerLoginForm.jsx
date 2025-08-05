import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const SellerLoginForm = () => {
  const formik=useFormik({
    initialValues:{
      email:"",
      otp:"",
    },
    onSubmit:(values)=>{
      console.log("form data ",values)
    }
  })
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-[#00927c] pb-5">Login As Seller</h1>
      <div className="space-y-5">
        <TextField fullWidth name='emial' label="Email"
        onChange={formik.handleChange} onBlur={formik.handleBlur} 
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}/>
        
        {true && <div>
          <p className='font-medium text-sm opacity-60'>Enter OTP sent to your email</p>
          <TextField fullWidth name='otp' label="OTP"
            onChange={formik.handleChange} onBlur={formik.handleBlur} 
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}/>
          </div>}
      </div>
      
    </div>
  )
}

export default SellerLoginForm
