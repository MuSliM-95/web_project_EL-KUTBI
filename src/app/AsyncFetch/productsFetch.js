import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../shared/lib/serverUrl/serverUrl";

export const getProducts = createAsyncThunk(
  "get/products",
  async ({ count }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/products/${count}`);
      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductId = createAsyncThunk(
  "get/product/id",
  async ({ _id }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/product/${_id}`);
      const data = await res.json();
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
