import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    basket: [],
    status: "initial" || "loading" || "error" || "success",
}


const basketReducer = createSlice({
   name: "basket",
   initialState,
   reducers: {
    addProducts: (state, action ) => {
        state.basket = action.payload
    }
   },
   extraReducers: (builder) => {

   }
})

export default basketReducer.reducer