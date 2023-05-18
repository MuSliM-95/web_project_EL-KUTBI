import { createSlice } from "@reduxjs/toolkit";
import { getBasket } from "../AsyncFetch/basketFetch";

const initialState = {
  userId: localStorage.getItem("userId"),
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  status: "initial" || "loading" || "error" || "success",
};

const basketReducer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.basket.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basket));
      // state.basket = JSON.parse(localStorage.getItem("basket"))
    },
    removeItem: (state, action) => {
      state.basket = state.basket.filter(
        (items) => items._id !== action.payload
      );
      localStorage.setItem("basket", JSON.stringify(state.basket));
      // state.basket = JSON.parse(localStorage.getItem("basket"))
    },
    incrementItemQuantity: (state, action) => {
      state.basket = state.basket.map((item) => {
        if (item._id === action.payload) {
          item.quantity++;
          return item;
        }
        return item;
      });
      localStorage.setItem("basket", JSON.stringify(state.basket));
      // state.basket = JSON.parse(localStorage.getItem("basket"))
    },
    decrementItemQuantity: (state, action) => {
      state.basket = state.basket.map((item) => {
        if (item._id === action.payload && item.quantity > 1) {
          item.quantity--;
          return item;
        }
        return item;
      });
      localStorage.setItem("basket", JSON.stringify(state.basket));
      // state.basket = JSON.parse(localStorage.getItem("basket"))
    },
    clearBasket: (state, action) => {
      localStorage.removeItem("basket")
      state.basket = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBasket.fulfilled, (state, action) => {
        state.status = "success";
        state.basket = action.payload.basket;
      })
      .addCase(getBasket.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const {
  addItem,
  removeItem,
  incrementItemQuantity,
  decrementItemQuantity,
  clearBasket
} = basketReducer.actions;

export default basketReducer.reducer;
