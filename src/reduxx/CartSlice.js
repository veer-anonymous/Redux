import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        data:[]
    },
    reducers:{
        addItemToCart(state,action){

        },
        removeItemFromCart(state,action){

        },
        emptyCart(state,action){

        }
    }
})

export const {addItemToCart,removeItemFromCart,emptyCart}=CartSlice.actions
export default CartSlice.reducer;