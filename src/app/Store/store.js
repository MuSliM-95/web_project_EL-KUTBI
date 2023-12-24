import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Reducers/productsReducer";
import usersReducer from "../Reducers/usersReducer";
import favoritesReducer from "../../entities/api/slice/favoritesReducer";
import basketReducer from "../../entities/api/slice/basketReducer";

export const store = configureStore({
  reducer: {
    productsReducer,
    usersReducer,
    favoritesReducer,
    basketReducer
  },
});
