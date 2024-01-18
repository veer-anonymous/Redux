import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice'
import FavReducer from "../src/FavSlice";


const MyStore=configureStore({
    reducer:{
        cart:CartReducer,
        fav:FavReducer
    }
})

export default MyStore