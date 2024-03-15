import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserInfo {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}

const initialState: UserInfo = {
    firstName: null,
    lastName: null,
    email: null,
};

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<{ firstName: string | null; lastName: string | null; email: string | null }>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
    },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
