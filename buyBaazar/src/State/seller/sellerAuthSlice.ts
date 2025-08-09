import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellerLogin=createAsyncThunk<any,any>("/auth/sellerLogin",
    async(loginRequest,{rejectWithValue})=>{
        try {
            const response =await api.post("sellers/login",loginRequest) 
            console.log("Signing  - - ",response);
            
        } catch (error) {
            console.log("error - - - ",error);
            
        }
    }
)