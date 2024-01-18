import { createSlice } from "@reduxjs/toolkit";

const Likes=createSlice({
    name:"likes",
    initialState:{
        data:[]
    },
    reducers:{
        addToLike(state,action){
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
            // state.data.push(action.payload)

        },
        removeToLikes(state,action){
            let temp=state.data.filter(item=>{
                return item.id != action.payload
            })
            state.data=temp
        }
    }
})

export const {addToLike,removeToLikes}=Likes.actions;
export default Likes.reducer;