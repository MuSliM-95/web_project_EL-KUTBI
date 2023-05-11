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
  "patch/user/code",
  async ({ phoneNumber }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/user/code`, {
        method: "PATCH",
        body: JSON.stringify({ phoneNumber }),
        headers: {
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

export const addPassword = createAsyncThunk(
  "patch/user/password",
  async ({ phoneNumber, password }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/user/password`, {
        method: "PATCH",
        body: JSON.stringify({ phoneNumber, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  "users/login",
  async ({ phoneNumber, password }, thunkAPI) => {
    try {
      console.log(phoneNumber, password);
      const res = await fetch(`${serverUrl}/users/login`, {
        method: "POST",
        body: JSON.stringify({ phoneNumber, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();

      localStorage.setItem("userId", data.userId);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUsers = createAsyncThunk("get/users", async (thunkAPI) => {
  try {
    const res = await fetch(`${serverUrl}/users`);
    const data = await res.json();
    console.log(data, 1);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUser = createAsyncThunk(
  "get/user",
  async ({ userId }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/user/${userId}`);
      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchUser = createAsyncThunk(
  "patch/user",
  async ({ name, address, contact, recipientNumber, userId }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/user/info/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({ name, address, contact, recipientNumber }),
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
