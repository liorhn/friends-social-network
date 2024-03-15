import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./userSlice";
import userInfoSlice from "./userInfoSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    name: userInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
