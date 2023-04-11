import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../serverUrl/serverUrl";

export const getProducts = createAsyncThunk(
  "get/products",
  async (thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/products`);
      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
