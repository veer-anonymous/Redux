import { configureStore } from "@reduxjs/toolkit";
import ReducerCart from '../slice/CartSlice'
import ReducerLikes from "../slice/Likes"


const Mystore=configureStore({
    reducer:{
        cart:ReducerCart,
        likes:ReducerLikes
    }
})

export default Mystore;