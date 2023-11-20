import React from "react";
import axios from "axios";
import { Dashboard } from "../Dashboard/HeaderDashboard";
// import { useSelector } from "react-redux";
import { config } from "../../config/config";
// import { RootState } from "../../store/store";
import { Box, Button } from "@mui/material";

export const Posts = () => {
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
