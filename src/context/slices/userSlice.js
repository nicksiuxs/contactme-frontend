import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    type: "",
    token: "",
    id: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            const user = action.payload.user;
            const token = action.payload.token;
            state.email = user.email;
            state.type = user.type;
            state.token = token;
            state.id = user._id;
        }
    }
});

export const { login } = userSlice.actions;
