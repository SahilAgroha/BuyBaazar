import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import TransactionTable from './Transaction'

const Payment = () => {
  return (
    <div className='space-y-5'>
      <Card className='rounded-md space-y-4 p-5'>
        <h1 className="text-gray-600 font-medium">Total Earning</h1>
        <h1 className="font-black text-xl outline-blue-1">&#8377;1164</h1>
        <Divider/>
        <p className="text-gray-600 font-medium pt-1">Last Payment: <strong>&#8377;0</strong></p>
      </Card>
      <div className="pt-20">
        <Button variant='contained' sx={{mb:2}}>
          Transaction
        </Button>
        <TransactionTable/>
      </div>
    </div>
  )
}

export default Payment
