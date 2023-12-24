import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../../shared/lib/serverUrl/serverUrl";

export const addItem = createAsyncThunk(
  "patch/item",
  async ({userId, item}, thunkAPI) => {
    try {
      console.log(userId, item);
      const token = localStorage.getItem("token");
      const res = await fetch(`${serverUrl}/item/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({item}),
      });
      const data = await res.json();
      console.log(data);
      return data
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeItem = createAsyncThunk(
  "patch/remove/item",
  async ({userId, item}, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${serverUrl}/item/remove/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({item}),
      });
      return await res.json();
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getFavorites = createAsyncThunk(
  "get/item",
  async ({userId}, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${serverUrl}/item/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      return await res.json();
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
