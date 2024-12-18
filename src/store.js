import { configureStore } from "@reduxjs/toolkit";
import userStore from "./stores/userSlice";

const store = configureStore({
    reducer: {
        user: userStore.reducer,
    },
});

export default store;
