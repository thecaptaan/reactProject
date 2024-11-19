import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: !!localStorage.getItem("in-token"),
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSlice: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logoutSlice: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const { loginSlice, logoutSlice } = authSlice.actions;
export default authSlice.reducer;