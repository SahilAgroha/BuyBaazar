import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, DealsState } from "../../types/dealType";
import { api } from "../../config/Api";

const initialState:DealsState={
    deals:[],
    loading:false,
    error:null,
    dealCreated:false,
    dealUpdated:false,
}

export const createDeal=createAsyncThunk('deals/createDeal',
    async(deal,{rejectWithValue})=>{
        try {
            const response=await api.post('/admin/deals',deal,{
                headers:{
                    "Content-Type":'application/json',
                    Authorization:`Bearer ${localStorage.getItem('jwt') || ''}`,
                },
            });
            console.log("createDeal ",response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data.message || "Faild to create Deal")
        }
    }
);

export const getAllDeals=createAsyncThunk('deals/getAllDeals',
    async(_,{rejectWithValue})=>{
        try {
            
        } catch (error) {
            
        }
    }
);

export const deleteDeal=createAsyncThunk<ApiResponse,number>('deals/deleteDeal',
    async(id:number,{ rejectWithValue })=>{
        try {
            const response=await api.delete(`/admin/deals/${id}`,{
                headers:{
                    "Content-Type":'application/json',
                    Authorization:`Bearer ${localStorage.getItem('jwt') || ''}`,
                },
            });
            console.log('deleteDeal ',response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data.message || "Faild to delete deal");
        }
    }
);


const dealSlice=createSlice({
    
})


export default dealSlice.reducer