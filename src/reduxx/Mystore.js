import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice'

const Mystore=configureStore({

    reducer:{
        cart:CartReducer
    }

})

export default Mystore;