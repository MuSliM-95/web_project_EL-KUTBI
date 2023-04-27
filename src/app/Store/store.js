import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Reducers/productsReducer";
import usersReducer from "../Reducers/usersReducer";
import favoritesReducer from "../Reducers/favoritesReducer";

export const store = configureStore({
  reducer: {
    productsReducer,
    usersReducer,
    favoritesReducer,
  },
});
