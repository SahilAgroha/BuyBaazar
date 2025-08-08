import { Delete } from '@mui/icons-material';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';

import React, { useState } from 'react'

const accountStatu = [
  {
    status: "PENDING_VERFICATION",
    title: "Pending Verification",
    description: "Your account is awaiting verification. Please check your email for further instructions."
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Your account is active and in good standing."
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description: "Your account has been temporarily suspended due to suspicious activity or violation of terms."
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description: "Your account has been deactivated. Contact support to reactivate."
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "Your account has been permanently banned due to severe violations."
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "Your account has been closed and is no longer accessible."
  }
]

const StyledTableCell=styled(TableCell)(({theme})=>({
    [`&.${tableCellClasses.head}`]:{
        backgroundColor:theme.palette.common.black,
        color:theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]:{
        fontSize:14,
    }
}));
const StyledTableRow=styled(TableRow)(({theme})=>({
    '&:nth-of-type(odd)':{ backgroundColor:theme.palette.action.hover,},
    '&:last-child td, &:last-child th':{border:0,},
}))

function createData(name,calories,fat,carbs,protein){
    return {name,calories,fat,carbs,protein}
}

const rows=[
    createData('Frozen youghurt',159,6.0,24,4.0),
    createData('Ice cream sandwich',237,9.0,37,4.3),
    createData('Eclair',262,16.0,24,6.0),
    createData('Cupcake',305,3.7,67,4.3),
    createData('Gingerbread',356,16.0,49,3.9),
];


const Coupon = () => {
    const [accountStatus,setAccountStatus]=useState("ACTIVE")
    
    const handleChange=(event)=>{
        setAccountStatus(event.target.value)
    }
  return (
    <>
    
    <TableContainer component={Paper}>
        <Table sx={{minWidth:700}} aria-label='customized-table'>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Coupon Code</StyledTableCell>
                    <StyledTableCell>Start Date</StyledTableCell>
                    <StyledTableCell >End Date</StyledTableCell>
                    <StyledTableCell align='right'>Minimum Order Value</StyledTableCell>
                    <StyledTableCell align='right'>Discount</StyledTableCell>
                    <StyledTableCell align='right'>Status</StyledTableCell>
                    <StyledTableCell align='right'>Delete</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map((row)=>(
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component='th' scope='row'>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.calories}</StyledTableCell>
                            <StyledTableCell>{row.fat}</StyledTableCell>
                            <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                            <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                            <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                            <StyledTableCell align='right'>
                                <Delete className='text-[#00927c]'/>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}

export default Coupon
