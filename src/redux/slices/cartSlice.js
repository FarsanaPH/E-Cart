import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // add to cart
        addToCartItem: (state, action) => {
            if (state.find((item) => item.id == action.payload.id)) {
                alert("Product already added to cart!!")
            } else {
                state.push( {...action.payload , quantity: 1 })   // state.push( action.payload ) if quantity concept not there
            }
        },
        // remove from cart
        removeFromCartItem: (state, action) => {
            return state.filter((item) => item.id != action.payload)
        },
        // Increase quantity
        increaseQuantity: (state, action) => {
            const existing = state.find((item) => item.id === action.payload);
            if (existing) {
                existing.quantity += 1;
            }
        },
        // Decrease quantity
        decreaseQuantity: (state, action) => {
            const existing = state.find((item) => item.id === action.payload);
                if (existing.quantity > 1) {
                    existing.quantity -= 1;
                } 
        },
        // empty cart
        emptyCart: (state) => {
            return state = []
        }

    }
})

export const { addToCartItem, removeFromCartItem, increaseQuantity, decreaseQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer