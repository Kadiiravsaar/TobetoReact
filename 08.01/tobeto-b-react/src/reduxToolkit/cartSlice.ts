import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartttt",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state: any, action) => {
            {
                state.cartItems = [...state.cartItems, action.payload]
            };

        },
        removeToCart: (state: any, action: any) => {
            {
                state.cartItems = state.cartItems.filter((i: any) => i.id !== action.payload.id)
            }
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;