import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../serverUrl/serverUrl";
import { addProductsBasket } from "./basketFetch";

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
  async ({ codeInputValue, phoneNumber }, thunkAPI) => {
    try {
      console.log(codeInputValue, phoneNumber);
      const res = await fetch(`${serverUrl}/users/code`, {
        method: "PATCH",
        body: JSON.stringify({ code: codeInputValue, phoneNumber }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data);
      }
      return data;
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
      const res = await fetch(`${serverUrl}/users/password`, {
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
      console.log(1)
      const res = await fetch(`${serverUrl}/users/login`, {
        method: "POST",
        body: JSON.stringify({ phoneNumber, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      const basket = JSON.parse(localStorage.getItem("basket"));
      addProductsBasket({ userId: data.userId, basketArray: basket });
      console.log(data);
      if(data.error) {
        return thunkAPI.rejectWithValue(data);
      } 
      if(data.token) {
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("token", data.token);
        return data;
      }
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
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUser = createAsyncThunk(
  "get/user",
  async ({ userId }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/users/${userId}`);
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
      const res = await fetch(`${serverUrl}/users/info/${userId}`, {
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

export const removeProfile = createAsyncThunk(
  "delete/user",
  async ({ userId, phoneNumber, password }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${serverUrl}/delete/users`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ userId, phoneNumber, password }),
      });
      const data = await res.json();
      if(data.error) {
        return thunkAPI.rejectWithValue(data);
      }
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
