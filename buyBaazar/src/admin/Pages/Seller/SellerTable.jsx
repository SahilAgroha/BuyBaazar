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


const SellerTable = () => {
    const [accountStatus,setAccountStatus]=useState("ACTIVE")
    
    const handleChange=(event)=>{
        setAccountStatus(event.target.value)
    }
  return (
    <>
    <div className='pb-5 w-60'>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Account Status</InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={accountStatus} label='Account Status' onChange={handleChange}>
            {
                accountStatu.map((item)=><MenuItem value={item.status}>{item.title}</MenuItem>)
            }
        </Select>
      </FormControl>
    </div>
    <TableContainer component={Paper}>
        <Table sx={{minWidth:700}} aria-label='customized-table'>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Seller Name</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell align='right'>Mobile</StyledTableCell>
                    <StyledTableCell align='right'>GSTIN</StyledTableCell>
                    <StyledTableCell align='right'>Bussiness Name</StyledTableCell>
                    <StyledTableCell align='right'>Account Status</StyledTableCell>
                    <StyledTableCell align='right'>Change Status</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map((row)=>(
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component='th' scope='row'>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.calories}</StyledTableCell>
                            <StyledTableCell align='right'>{row.fat}</StyledTableCell>
                            <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                            <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                            <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                            <StyledTableCell align='right'>
                                <Button>Change</Button>
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

export default SellerTable
