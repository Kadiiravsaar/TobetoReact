import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const rootReducer = combineReducers({
    cart: cartReducer,
});


export default configureStore({ reducer: rootReducer });