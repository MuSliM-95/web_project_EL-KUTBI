import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../AsyncFetch/productsFetch"

const initialState = {
    products: [],
    productsCount: null,
    status: "initial" || "loading" || "error" || "success",
}


const productsReducer = createSlice({
    name:"products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload.products;
                state.productsCount = action.payload.arrayLength
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "error";
            })

    }
})

export default productsReducer.reducer