import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;

export default userSlice.reducer;
