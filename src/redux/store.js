import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice"; // not take wishlistSlice as object ie,it take as reducer function, not the object that has { actions, reducer }.
import cartReducer from "./slices/cartSlice"


// Save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (e) {
        // ignore write errors
    }
};

// Load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
        cartItem: cartReducer
    },
    preloadedState: loadState()
})

store.subscribe(() => {
    saveState({
        cartItem: store.getState().cartItem,
        wishlist: store.getState().wishlist
    });
});


export default store