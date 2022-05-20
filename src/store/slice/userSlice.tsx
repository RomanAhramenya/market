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
            state.id = action.payload.id;
            state.token = action.payload.token

            localStorage.setItem('email',action.payload.email) 
            localStorage.setItem('id', action.payload.id)
            localStorage.setItem('tokenRef', action.payload.token)
          
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.token = null

            localStorage.removeItem('token')
            localStorage.removeItem('id')
            localStorage.removeItem('email')

        }
    }
}
    
)
export const {setUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer