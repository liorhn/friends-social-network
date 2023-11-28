import React from "react";
import axios from "axios";
import { HeaderDashboard } from "../Dashboard/HeaderDashboard";
import { config } from "../../config/config";
import {
  Box,
  Button,
  TextField,
  Stack,
} from "@mui/material";

import { PostComponent } from "./PostComponent";

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
      <HeaderDashboard></HeaderDashboard>
      <Box>
        <Button onClick={onClick}>Just an AJAX button</Button>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Write your post here..."
            inputProps={{
              style: {
                width: "600px",
                height: "100px",
              },
            }}
          />
          <Button variant="outlined">Submit Post</Button>
        </Stack>
        <PostComponent></PostComponent>
      </Box>
    </>
  );
};
      