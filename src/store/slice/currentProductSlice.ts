import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IGetCurrentPorjectAxios, IGetPorjectAxios, IProduct } from "../../models/models";
import { fetchCurrentProduct } from "./currentProductAction";

interface ICurrentProduct{
    product:{
        [key:string] : IProduct
    }
    isLoading:boolean
    error:string
}
const initialState:ICurrentProduct = {
    product: {},
    isLoading:false,
    error:''
}

const CurrentProductSlice = createSlice({
    name:'currentProduct',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchCurrentProduct.fulfilled.type] : (state,action: PayloadAction<IGetCurrentPorjectAxios>) => {
            state.isLoading = false;
            state.error = '';
            state.product[action.payload.key] = action.payload.data
        },
        [fetchCurrentProduct.pending.type] : (state) => {
            state.isLoading = true
        },
        [fetchCurrentProduct.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default CurrentProductSlice.reducer