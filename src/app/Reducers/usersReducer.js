import {createSlice} from "@reduxjs/toolkit"
import { activationCode, addPassword, getUsers, userLogin, userRegistration } from "../AsyncFetch/userFetch"


const initialState = {
    user: null,
    status: "initial" || "loading" || "error" || "success",
    users: [],
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId")
}


const usersReducer = createSlice({
    name:"user",
    initialState,
    reducers: {},
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
        })
        .addCase(activationCode.fulfilled, (state, action) => {
            state.status = "success";
            state.user = action.payload;
        })
        .addCase(activationCode.rejected, (state, action) => {
            state.status = "error";
        });
        builder
        .addCase(addPassword.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(addPassword.fulfilled, (state, action) => {
            state.status = "success";
            state.token = action.payload.token;
            state.userId = action.payload.userId;
        })
        .addCase(addPassword.rejected, (state, action) => {
            state.status = "error";
        });
        builder 
        .addCase(userLogin.pending, (state, action) => {
            state.status = "loading";

        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.status = "success";
            state.token = action.payload.token;
            state.userId = action.payload.userId;
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.status = "error";

        })
    } 
})

export default usersReducer.reducer