import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductId } from "../AsyncFetch/productsFetch";

const initialState = {
  products: [],
  productsCount: null,
  status: "initial" || "loading" || "error" || "success",
  searchValue: "",
  product: null,
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload.products;
        state.productsCount = action.payload.arrayLength;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
      builder
      .addCase(getProductId.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProductId.fulfilled, (state, action) => {
        state.status = "success";
        state.product = action.payload
      })
      .addCase(getProductId.rejected, (state, action) => {
        state.status = "error";
      })
  },
});

export const { inputValue } = productsReducer.actions;
export default productsReducer.reducer;
