import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating} from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
      <Grid container spacing={2} gap={7}>
        <Grid size={{xs:1}}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155FD"}}>S</Avatar>
            </Box>
        </Grid>
        <Grid size={{xs:9}}>
            <div className="space-y-2">
                <div>
                    <p className="font-semibold text-lg">Sahil</p>
                    <p className="opacity-70">2025-07-31T23:17:08.453678</p>
                </div>
            </div>
            <Rating readOnly value={4.5} precision={.5}/>
            <p>value for money, great product</p>
            <div>
                <img className='w-24 h-24 object-cover'
                src="https://sareesbazaar.in/cdn/shop/files/SB61_2974_30011A-A_0c0dcc3f-b804-4226-a294-411ac41e32d5.jpg?v=1749814391&width=128" alt="" />
            </div>
        </Grid>
       
      </Grid>
        <IconButton>
            <Delete sx={{color:red[700]}}/>
        </IconButton>
    </div>
  )
}

export default ReviewCard
