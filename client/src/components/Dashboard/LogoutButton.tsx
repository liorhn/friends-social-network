import React from "react";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { config } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { store } from "../../store/store";
import { loggedOut } from "../../store/userSlice";


export const LogoutButton = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    axios
      .get(`${config.apiBase}/v1/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        store.dispatch(loggedOut());
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Button onClick={logOutHandler}>
        <LogoutIcon sx={{ color: "white" }}></LogoutIcon>
      </Button>
    </>
  );
};
