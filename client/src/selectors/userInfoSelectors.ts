import { useSelector } from "react-redux";

export const useUserInfoSelector = (): { firstName: string | null; lastName: string | null; email: string | null } => {
    const userInfo = useSelector((state: any) => ({
        firstName: state.name.firstName,
        lastName: state.name.lastName,
        email: state.name.email,
    }));

    return userInfo;
};
