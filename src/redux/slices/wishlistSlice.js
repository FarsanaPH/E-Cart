import { createSlice } from "@reduxjs/toolkit";


export const wishlistSlice = createSlice({
    name: "wish",
    initialState: [],
    reducers: {
        // actions
        // add to wishlist
        addWishlistItem: (state,action) => {
            const existing = state.find((item) => item.id === action.payload.id);
            if(existing){
                // remove from wishlist
                return state.filter((item) => item.id !== action.payload.id);
            }else{
                // add to wishlist
                 state.push(action.payload)
            }
        },

        // remove from wishlist
        removeWislistItem: (state,action) => {
           return state.filter((item)=>item.id != action.payload)
        }
        

    }
})

export const {addWishlistItem,removeWislistItem} = wishlistSlice.actions // exporting to components
export default wishlistSlice.reducer //exporting to store