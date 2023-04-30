import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Reducers/productsReducer";
import usersReducer from "../Reducers/usersReducer";
import favoritesReducer from "../Reducers/favoritesReducer";
import basketReducer from "../Reducers/basketReducer";

export const store = configureStore({
  reducer: {
    productsReducer,
    usersReducer,
    favoritesReducer,
    basketReducer
  },
});
