import React, { useEffect } from "react";
import { useIsUserLoggedIn } from "../../selectors/userSelectors";
import { useNavigate } from "react-router-dom";

export const PageRequireAuth = (props: React.PropsWithChildren) => {
  const isUserLoggedIn = useIsUserLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  if (isUserLoggedIn) {
    return <>{props.children}</>;
  }
  return <div>Sign-In is required in order to view this page.</div>;
};
