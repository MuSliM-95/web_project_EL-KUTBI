import {createSlice} from "@reduxjs/toolkit"
import { activationCode, getUsers, userRegistration } from "../AsyncFetch/userFetch"


const initialState = {
    user: null,
    status: "initial" || "loading" || "error" || "success",
    users: [],
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
    } 
})

export default usersReducer.reducer