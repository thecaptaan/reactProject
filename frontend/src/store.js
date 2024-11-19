import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
export const store = configureStore({
    reducer: {
        // Add the reducer function here
        "auth": authReducer,
    }
});