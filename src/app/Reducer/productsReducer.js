import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../AsyncFetch/productsFetch"

const initialState = {
    products: [],
    loading: Boolean,
    error: null
}


const productsReducer = createSlice({
    name:"products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

    }
})

export default productsReducer.reducer