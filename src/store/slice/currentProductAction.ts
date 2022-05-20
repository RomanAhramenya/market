import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentProduct = createAsyncThunk(
    'currentProduct/fetchCurrentProduct',
    async (arg:string,thunkApi) => {
        try {
            const response = await axios.get<any>(`https://fakestoreapi.com/products/${arg}`).then(response =>{
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