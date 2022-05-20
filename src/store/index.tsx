import { configureStore } from "@reduxjs/toolkit";
import addToBasketSlice from "./slice/addToBasketSlice";
import currentProductReducer from "./slice/currentProductSlice";
import productReducer from "./slice/productSlice";
import  userReducer from "./slice/userSlice";

export const store = configureStore({
    reducer:{
        users: userReducer,
        products:productReducer,
        currentProduct: currentProductReducer,
        basket:addToBasketSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;