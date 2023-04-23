import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    type: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email
        }
    }
});

export const { login } = userSlice.actions;
