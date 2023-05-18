import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../serverUrl/serverUrl";

export const addProductsBasket = createAsyncThunk(
  "patch/basket",
  async ({ userId, basketArray }, thunkAPI) => {
    try {
      console.log(userId, basketArray);
      const token = localStorage.getItem("token");
      const res = await fetch(`${serverUrl}/basket/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({ basketArray }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBasket = createAsyncThunk(
  "get/basket",
  async ({ userId }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      // const basket = JSON.parse(localStorage.getItem("basket"));
      const res = await fetch(`${serverUrl}/basket/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      // addProductsBasket({userId: data.userId, basketArray: data.basket})
      // localStorage.setItem("basket", JSON.stringify(data.basket));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
