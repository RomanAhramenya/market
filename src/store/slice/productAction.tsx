import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../models/models";


export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (arg:string,thunkApi) => {
        try {
            const response = await axios.get<any>(`https://fakestoreapi.com/products/category/${arg}`).then(response =>{
                return response.data
            })
            
            return {
                key:arg,
                data:response
            }
        } catch (e) {
            return thunkApi.rejectWithValue('что то пошло не так')
        }
    }
)