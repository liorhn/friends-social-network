import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { loggedIn } = loginSlice.actions;

export default loginSlice.reducer;
