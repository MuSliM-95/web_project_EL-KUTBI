import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "../Reducers/productsReducer"
import usersReducer from "../Reducers/usersReducer"

export const store = configureStore({
reducer: {
    productsReducer,
    usersReducer

}
})