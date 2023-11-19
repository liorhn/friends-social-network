import React from "react";
import axios from "axios";
import { Dashboard } from "../Dashboard/Dashboard";
// import { useSelector } from "react-redux";
import { config } from "../../config/config";
// import { RootState } from "../../store/store";
// import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

export const Posts = () => {
  // const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  // const navigate = useNavigate();

  // if (!isLoggedIn) {
  //   navigate("/login");
  //   return null;
  // }

  const onClick = () => {
    axios
      .post(
        `${config.apiBase}/v1/posts`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Dashboard></Dashboard>
      <Box>
        <Button onClick={onClick}>Just an AJAX button</Button>
      </Box>
    </>
  );
};
