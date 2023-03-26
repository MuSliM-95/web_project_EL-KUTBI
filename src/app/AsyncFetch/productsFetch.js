import {createAsyncThunk} from "@reduxjs/toolkit"

export const getProducts = createAsyncThunk("get/products", async (thunkAPI) => {
    try {
        const res = await fetch("http://localhost:6001/products")
        return await res.json()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)

    }
})
