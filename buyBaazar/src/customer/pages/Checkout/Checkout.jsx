import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from './AddressCard'
import AddressForm from './AddressForm';
import PricingCard from '../Cart/PricingCard';

const style={
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const PaymentGateway = [
    {
        value:"RAZORPAY",
        image:"https://imgs.search.brave.com/vgLh1_hY8a1TDS_flOXU38N-xkycH_FHVyDLVsxt944/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGF0YXJvYm90LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMy9SYXpvcnBh/eV9sb2dvLTEwMjR4/MjE3LnBuZw",
        label:""
    },
    {
        value:"STRIPE",
        image:"https://imgs.search.brave.com/ycagYqgbO4lO7_7bcef5DIaACIzYOazI7bCZHBQKoa8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA1/L1N0cmlwZS1sb2dv/LTUwMHgyODEucG5n",
        label:""
    }
]

const Checkout = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [paymentGateway,setPaymentGatway]=useState("RAZORPAY");
    const handlePaymentChange=(event)=>{
        setPaymentGatway(event.target.value);
    };
  return (
    <>
    <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
            <div className="col-span-2 space-y-5">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold">Select Address</h1>
                    <Button onClick={handleOpen} >
                        Add new Address
                    </Button>
                </div>
                <div className="text-xs font-medium space-y-5">
                    <p>Saved Address</p>
                    <div className='space-y-3'>
                        {[1,1,1].map((item)=><AddressCard/>)}
                    </div>
                </div>
                <div className="py-4 px-5 rounded-md border">
                    <Button onClick={handleOpen}>
                        Add new Address
                    </Button>
                </div>
            </div>
            <div className="">
                <div>
                    <div className='space-y-3 border p-5 rounded-md'>
                        <h1 className='text-[#00927c] font-medium text-center pb-2 '>Chose Payment Gateway</h1>
                        <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' 
                            name='row-radio-buttons-group' 
                            className='flex justify-between pr-0 '
                            onChange={handlePaymentChange}
                            value={paymentGateway}>
                            {PaymentGateway.map((item,index)=>
                            <FormControlLabel className='border w-[45%] pr-2 rounded-md flex justify-center'
                                value={item.value}
                                control={<Radio />}
                                label={
                                    <img src={item.image} alt={item.label} className={`${item.value=="STRIPE"?"w-14":""}`} />
                                }

                                
                            />)}
                        </RadioGroup>
                    </div>
                </div>
                <div className='border rounded-md p-5 '>
                    
                    <PricingCard/>
                    <div className='p-5'>
                        <Button fullWidth variant='contained' sx={{py:"11px"}}>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describdby="modal-modal-description">
        <Box sx={style}>
            <AddressForm/>
        </Box>
    </Modal>
    </>
  )
}

export default Checkout
