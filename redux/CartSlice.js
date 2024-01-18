// import { View, Text } from 'react-native'
// import React from 'react'

import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

// const CartSlice = () => {
//   return (
//     <View>
//       <Text>CartSlice</Text>
//     </View>
//   )
// }

// export default CartSlice

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart(state, action) {
      // state.data
      console.log('currenct statme ;;', state);
      console.log('currenct statme ;;', action);
      let ind = -1;
      state.data.map((item, index) => {
        if (item.id == action.payload.id) {
          ind = index;
        }
      });
      if (ind != -1) {
        state.data.map((item, index) => {
          if (item.id == action.payload.id) {
            item.qty=item.qty + 1;
          }
        });
      } else {
        state.data.push(action.payload);
      }
    },
    removeItemFromCart(state, action) {
        let ind = -1;
        state.data.map((item, index) => {
          if (item.id == action.payload.id) {
            ind = index;
          }
        });
        if (ind != -1) {
          state.data.map((item, index) => {
            if (item.id == action.payload.id) {
              item.qty=item.qty - 1;
            }
          });
        }
        // let ind = -1;
        // let temp=state.data
        // state.data.map((item, index) => {
        //   if (item.id == action.payload.id) {
        //     ind = index;
        //   }
        // });
        // if (ind != -1) {
        //   state.data.map((item, index) => {
        //     if (item.id == action.payload.id) {
        //     //   item.qty=item.qty - 1;
        //     if(item.qty <2 ){
        //         temp.splice(index)
        //     }else{
        //         item.qty=item.qty -1
        //     }
        //     }
        //   });
        // }
        // state.data=temp
    },
    removeItem(state,action){
        let temp=state.data.filter(item=>{
            return item.id !=action.payload;
        })
        state.data=temp;

    },
    emptyCart(state, action) {},
  },
});

export const {addItemToCart,removeItemFromCart,emptyCart,removeItem} = CartSlice.actions;
export default CartSlice.reducer;
