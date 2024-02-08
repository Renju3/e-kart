import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // actions
        // function logic to add item into wishlist
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromwishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const {addToWishlist,removeFromwishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;