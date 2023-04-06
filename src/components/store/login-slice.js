import { createSlice } from "@reduxjs/toolkit";

const LoginSlice=createSlice({
    name:'login',
    initialState:{isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn=true

        },
        logOut(state){
            state.isLoggedIn=false
        }
    }
})
export default LoginSlice;
export const loginActions=LoginSlice.actions;
