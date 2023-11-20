import axios from "axios";
import React, { useState, useEffect } from "react";
import { config } from "../../config/config";
import { store } from "../../store/store";
import { loggedIn } from "../../store/userSlice";
import { CircularProgress, Box } from "@mui/material";

export function LoggedInUserCheck(props: React.PropsWithChildren) {
  const [isCheckedLogin, setIsCheckedLogin] = useState(false);

  useEffect(() => {
    if (isCheckedLogin) {
      return;
    }
  }, [isCheckedLogin]);

  useEffect(() => {
    axios
      .get(`${config.apiBase}/v1/login-status`, {
        withCredentials: true,
      })
      .then((res) => {
        store.dispatch(loggedIn());
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsCheckedLogin(true);
      });
  }, [setIsCheckedLogin]);

  if (isCheckedLogin) {
    return <>{props.children}</>;
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
