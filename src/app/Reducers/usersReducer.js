import { createSlice } from "@reduxjs/toolkit";
import {
  activationCode,
  addPassword,
  getUser,
  getUsers,
  patchUser,
  removeProfile,
  userLogin,
  userRegistration,
} from "../AsyncFetch/userFetch";

const initialState = {
  user: "",
  status: "initial" || "loading" || "error" || "success",
  users: [],
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  errorCode: null,
};

const usersReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      state.token = localStorage.removeItem("token");
      state.userId = localStorage.removeItem("userId");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "error";
      });
    builder
      .addCase(userRegistration.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.status = "error";
      });
    builder
      .addCase(activationCode.pending, (state, action) => {
        state.status = "loading";
        state.errorCode =  null
      })
      .addCase(activationCode.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(activationCode.rejected, (state, action) => {
        state.status = "error";
        state.errorCode = action.payload.error || null
      });
    builder
      .addCase(addPassword.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addPassword.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.user = action.payload;
      })
      .addCase(addPassword.rejected, (state, action) => {
        state.status = "error";
      });
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.status = "loading";
        state.errorCode =  null
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "error";
        state.errorCode = action.payload.error || null
      });
    builder
      .addCase(patchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(patchUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(patchUser.rejected, (state, action) => {
        state.status = "error";
      });
    builder
      .addCase(getUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "error";
      });
    builder
      .addCase(removeProfile.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(removeProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.token = localStorage.removeItem("token");
        state.userId = localStorage.removeItem("userId");
      })
      .addCase(removeProfile.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { removeToken } = usersReducer.actions;
export default usersReducer.reducer;
