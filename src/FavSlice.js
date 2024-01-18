import { createSlice } from "@reduxjs/toolkit"


const FavSlice = createSlice({
    name:"fav",
    initialState:{
        data:[]

    },
    reducers:{
        addItemToFav(state,action){

           
            // console.log('currenct statme ;;', state);
            // console.log('currenct statme ;;', action);
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
            //   state.data.push(action.payload);
              state.data.push(action.payload)
            }
        },
        removeItemFromFav(state,action){
            let temp =state.data.filter(item=>{
                return item.id!=action.payload;
            })
            state.data=temp;
        }
    }
})


export const {removeItemFromFav,addItemToFav} =FavSlice.actions;
export default FavSlice.reducer