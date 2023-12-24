import { createSlice } from "@reduxjs/toolkit";
import { getFavorites, addItem, removeItem } from "../async/favoritesFetch";

const initialState = {
  productFavorites: [],
  status: "initial" || "loading" || "error" || "success",
};

const favoritesReducer = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addItem.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(addItem.fulfilled, (state, action) => {
      state.status = "success"
      state.productFavorites = action.payload.favorites
    })
    .addCase(addItem.rejected, (state, action) => {
      state.status = "error"
    });
    builder
    .addCase(removeItem.pending, (state, action) => {
    })
    .addCase(removeItem.fulfilled, (state, action) => {
      state.status = "success"
      state.productFavorites = action.payload.favorites
    })
    .addCase(removeItem.rejected, (state, action) => {
      state.status = "error"
    });
    builder
      .addCase(getFavorites.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.status = "success"
        state.productFavorites = action.payload.favorites
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.status = "error"
      });
  },
});

export default favoritesReducer.reducer;
