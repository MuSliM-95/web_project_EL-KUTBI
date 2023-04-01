import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "../Reducer/productsReducer"

export const store = configureStore({
reducer: {
    productsReducer,
    
}
})