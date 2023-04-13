import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../serverUrl/serverUrl";

export const userRegistration = createAsyncThunk(
  "post/users",
  async ({ phoneNumber }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/users`, {
        method: "POST",
        body: JSON.stringify({ phoneNumber }),
        headers: {
          "Content-type": "application/json",
        },
      });
      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const activationCode = createAsyncThunk(
  "post/users",
  async ({ phoneNumber }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/user/code`, {
        method: "PATCH",
        body: JSON.stringify({ phoneNumber }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {}
  }
);

export const getUsers = createAsyncThunk("get/users", async (thunkAPI) => {
  try {
    const res = await fetch(`${serverUrl}/users`);
    return await res.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
