import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useIsUserLoggedIn = (): boolean => {
    return useSelector((state: RootState) => state.login.isLoggedIn);
};