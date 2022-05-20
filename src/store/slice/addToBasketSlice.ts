import { createSlice } from "@reduxjs/toolkit";
import { IBasket } from "../../models/models";

interface IBasketArr {
    basket:{
        [key:number]: IBasket 
    }
   
}
const initialState:IBasketArr = {
    basket:{},
    
}

export const AddToBasketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        addToBasket:(state,action) => {
            state.basket[action.payload.id] = action.payload.data
           
            debugger
        },
        setCount:(state,action) => {
                
                state.basket[action.payload.id].count = action.payload.count
            
            
        },
        deleteItem:(state,action) => {
          delete  state.basket[action.payload] 
        },
        deleteAll:(state) => {
             state.basket = {}
          }

    }
})

export const {addToBasket,setCount,deleteItem,deleteAll} = AddToBasketSlice.actions

export default AddToBasketSlice.reducer