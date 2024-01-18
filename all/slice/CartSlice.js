import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart(state, action) {
      console.log('current value of state', state);
      console.log('current value of action', action);
      let ind = -1;

      state.data.map((item, index) => {
        if (item.id == action.payload.id) {
          ind = index;
        }
      });

      if (ind != -1) {
        state.data.map((item, index) => {
          if (item.id == action.payload.id) {
            item.qty = item.qty + 1;
          }
        });
      } else {
        state.data.push(action.payload);
      }
    },
    removeFromItemCart(state, action) {
      let ind = -1;
    //   let temp=[];

      state.data.map((item, index) => {
        if (item.id == action.payload.id) {
          ind = index;
        }
      });

      if (ind != -1) {
        state.data.map((item, index) => {
          if (item.id == action.payload.id) {
            item.qty = item.qty - 1;
          }
        });
      } 
    },
    CartEmpty(state, action) {

        let temp=state.data.filter(item=>{
            return item.id != action.payload
        })
        state.data=temp
    },
  },
});

export const {addItemToCart, removeFromItemCart, CartEmpty} = CartSlice.actions;

export default CartSlice.reducer;
