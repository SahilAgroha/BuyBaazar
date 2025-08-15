import { createAsyncThunk } from "@reduxjs/toolkit";
import {api} from '../../config/Api'
const API_URL='/admin/coupons';

export const createCoupon=createAsyncThunk<Coupon,{coupon:any,jwt:string},{rejectValue:string}>('coupon/createCoupon',
    async({coupon,jwt},{rejectWithValue})=>{
        try {
            const response=await api.post(`${API_URL}/admin/create`,coupon,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("createCoupon ",response.data);
            return response.data
            
        } catch (error) {
            return rejectWithValue(error.response?.data.message || "Faild to create coupon");
        }
    }
);