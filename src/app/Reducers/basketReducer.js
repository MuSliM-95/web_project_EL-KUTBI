import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

const basketReducer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.basket.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeItem: (state, action) => {
      state.basket = state.basket.filter(
        (items) => items._id !== action.payload
      );
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const { addItem, removeItem } = basketReducer.actions;

export default basketReducer.reducer;
