import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "initial" || "loading" || "error" || "success",
    productFavorites: JSON.parse(localStorage.getItem('favorites')) || []

}

 const favoritesReducer = createSlice({
    name: "favorites",
    initialState, 
    reducers: {
        addItem: (state, action) => {
            state.productFavorites.push(action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.productFavorites));
        }, 
        removeItem: (state, action) => {
          state.productFavorites = state.productFavorites.filter((items) => items._id !== action.payload)
          localStorage.setItem("favorites", JSON.stringify(state.productFavorites));
          }
    }


})

export const {addItem, removeItem} = favoritesReducer.actions
export default favoritesReducer.reducer

