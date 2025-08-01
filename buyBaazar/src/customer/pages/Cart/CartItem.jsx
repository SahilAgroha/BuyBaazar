import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
    const handleUpdateQuantity = () => {
        // Logic to update quantity
    }
  return (
    <div className='border rounded-md relative'>
      <div className='p-5 flex gap-3'>
        <div>
            <img className='w-[90px] rounded-md' 
            src='https://sareesbazaar.in/cdn/shop/files/SB38_VOL9KP_K790-A_0150cf62-1a13-48c2-bfa8-10d108b22e01.jpg?v=1741330246&width=770'/>
        </div>
        <div className='space-y-2'>
            <h1 className='font-semibold text-lg'>Sheoran Cloths</h1>
            <p className='text-gray-600 font-medium text-sm'>Rayon Fabric Teal Color Traditional Wear Boys Readymade Kurta Pyjama</p>
            <p className='text-gray-400 text-xs'><strong>Sold by: </strong>  Natural Lifestyle Products Private Limited</p>
            <p className='text-sm'> 7 Days replacement available</p>
            <p className='text-gray-500 text-sm'><strong>quantity : </strong> 5</p>
        </div>
        <Divider/>
       </div>
       <Divider/>
        <div className='flex justify-between items-center'>
            <div className='px-5 py-2 flex justify-between items-center'>

            <div className="flex items-center gap-2 2-[140px] justify-between">
                <Button onClick={handleUpdateQuantity} disabled={true}>
                    <Remove/>
                </Button>
                <span>{5}</span>
                <Button onClick={handleUpdateQuantity}>
                    <Add/>
                </Button>
            </div>
        </div>

        <div className='pr-5'>
            <p className='text-gray-700 font-medium'>₹799</p>
        </div>
        </div>

        <div className='absolute top-1 right-1'>
            <IconButton color='primary'>
                <Close/>
            </IconButton>
        </div>
      
    </div>
  )
}

export default CartItem
