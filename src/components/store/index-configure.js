import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-Slice";
import LoginSlice from "./login-slice";

const store=configureStore({reducer:{ui:uiSlice.reducer,cart:cartSlice.reducer,login:LoginSlice.reducer}})
export default store;