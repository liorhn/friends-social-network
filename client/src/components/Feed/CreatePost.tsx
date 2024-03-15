import React, { useState } from "react";
import { Stack, Button, TextField } from "@mui/material";
import axios from "axios";
import { config } from "../../config/config";
import { Filter } from "./Filter";

export const CreatePost = ({ onCreate }: any) => {
  const [postContent, setPostContent] = useState("");

  const handlerSubmitPost = () => {
    axios
      .post(
        `${config.apiBase}/v1/posts`,
        { postContent },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        axios
          .get(`${config.apiBase}/v1/posts`, {
            withCredentials: true,
          })
          .then((response) => {
            const newPost = response.data.result;
            const lastNewPost = newPost[newPost.length - 1];
            onCreate(lastNewPost);
          })

          .catch((error) => {
            console.error(error);
          });
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          mt: "50px"
        }}
      >
        <TextField
          defaultValue="Whats on your mind?"
          sx={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "primary.main",
            borderRadius: "10px",
            p: "20px",
            width: "600px",
            height: "100px",
            input: {
              color: 'gray',
            },
          }}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}

          onChange={(e) => {
            setPostContent(e.target.value);
          }}
        />
        <Stack sx={{ flexDirection: "coulmn", gap: "10px" }}>
          <Button variant="outlined" onClick={handlerSubmitPost}>
            Submit Post
          </Button>
          <Filter />
        </Stack>
      </Stack>
    </>
  );
};
