import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { IGetPorjectAxios, IProducts } from "../../models/models"
import { fetchProduct } from "./productAction"



const initialState:IProducts = {
    products: {},
    isLoading:false,
    error:''
}

const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setRate:(state,action) => {
                state.products[action.payload.key] = action.payload.rate
        }
    },
    extraReducers:{
        [fetchProduct.fulfilled.type] : (state,action: PayloadAction<IGetPorjectAxios>) => {
            state.isLoading = false;
            state.error = '';
            state.products[action.payload.key] = action.payload.data
        },
        [fetchProduct.pending.type] : (state) => {
            state.isLoading = true
        },
        [fetchProduct.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default ProductSlice.reducer