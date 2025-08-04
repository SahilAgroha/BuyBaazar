import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper';
import { Payments } from '@mui/icons-material';

const OrderDetails = () => {
    const navigate=useNavigate();
  return (
    <Box className='space-y-5'>
        <section className="flex flex-col gap-5 justify-center items-center">
            <img alt="" className="w-[100px]" 
            src='https://imgs.search.brave.com/GvzXRil-O2pXggOQabY51u6g-jv2T1UUahesS8Tyw8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzQxLzcxLzUw/LzM2MF9GXzQ0MTcx/NTAyMF9pcXFrWlNR/anZKcVlGWG9HWnhP/Sk4zbzNaRmE0U3Jh/Zy5qcGc'/>
            <div className="text-sm space-y-1 text-center">
                <h1 className="font-bold">{"Sheoran Clothing"}</h1>
                <p>{"Beautiful gold men's watch with a black strap on a wooden stand "}</p>
                <p><strong>size : </strong>FREE</p>
            </div>
            <div>
                <Button onClick={()=>navigate(`/reviews/${5}/create`)}>Write Review</Button>
            </div>
        </section>

        <section className="border p-5">
            <OrderStepper orderStatus={"SHIPPED"}/>
        </section>
        <div className="border p-5">
            <h1 className="font-bold pb-3 "> Delivery Address</h1>
            <div className="text-sm space-y-2 ">
                <div className="flex gap-5 font-medium">
                    <p>Sahil</p>
                    <Divider flexItem orientation='vertical'/>
                    <p>{9812591172}</p>
                </div>
                <p>Agroha,Hissar,Haryana-125047</p>
            </div>
        </div>

        <div className="border space-y-4">
            <div className="flex justify-between text-sm  pt-5 px-5">
                <div className="space-y-1">
                    <p>You saved <span className='text-green-500 font-medium text-xs'>&#8377;{699}.00</span> on this item</p>
                </div>
                <p className='font-medium'>&#8377;{799}.00</p>
            </div>
            <div className="px-5">
                <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
                    <Payments/>
                    <p>Pay On Delivery</p>
                </div>
            </div>

            <Divider/>
            <div className="px-5 pb-5">
                <p className="text-xs"><strong>Sold by : </strong>Sheoran Clothing</p>
            </div>
            <div className="p-10">
                <Button disabled={true} color='error' sx={{py:"0.7rem"}} variant='outlined' fullWidth>
                    {true?"order canceled":"Cancel Order"}
                </Button>
            </div>
        </div>

        
      
    </Box>
  )
}

export default OrderDetails
