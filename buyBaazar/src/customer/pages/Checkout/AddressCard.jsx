import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
    const handleChange=(event)=>{

    }
  return (
    <div className='p-5 border rounded-md flex'>
      <div>
        <Radio checked={true} onChange={handleChange} value="addres" name='radio-button'/>
      </div>
      <div className="space-y-3 pt-3 ">
        <h1>Sheoran</h1>
        <p className="w-[320px">
            Agroha,Hissar,Haryana-125047
        </p>
        <p><strong>Mobile : </strong>9812591172</p>
      </div>
    </div>
  )
}

export default AddressCard
