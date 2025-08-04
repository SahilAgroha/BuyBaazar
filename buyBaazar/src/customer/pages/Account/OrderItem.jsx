import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className='flex items-center gap-5'>
        <div>
          <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
            <ElectricBolt/>
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-[#00927c]">PENDING</h1>
          <p>Arriving By Mon, 15 Jul</p>
        </div>

      </div>
      <div className='p-5 bg-teal-50 flex gap-3'>
        <div>
          <img className='w-[70px]' src='https://imgs.search.brave.com/GvzXRil-O2pXggOQabY51u6g-jv2T1UUahesS8Tyw8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzQxLzcxLzUw/LzM2MF9GXzQ0MTcx/NTAyMF9pcXFrWlNR/anZKcVlGWG9HWnhP/Sk4zbzNaRmE0U3Jh/Zy5qcGc'/>
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Sheoran Clothing</h1>
          <p>Beautiful gold men's watch with a black strap on a wooden stand </p>
          <p><strong>size:</strong>FREE </p>
        </div>

      </div>
      
    </div>
  )
}

export default OrderItem
