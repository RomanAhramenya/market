import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUser {
    email:null | string
    id: null | string
    token: null | string
}

const initialState:IUser = {
    email:null,
    id:null,
    token:null
}

export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state,action) {
            state.email = action.payload.email;
            state.id = action.payload.email;
            state.token = action.payload.email
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.token = null
        }
    }
}
    
)
export const {setUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer