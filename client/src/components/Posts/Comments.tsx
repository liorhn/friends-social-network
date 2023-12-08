import React, { useState } from "react";
import { Stack, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { config } from "../../config/config";
import { Comment } from "./Comment";

export const Comments = ({
  postId,
  userId,
  comment,
  postFirstName,
  postLastName,
}: {
  postId: number;
  userId: number;
  comment: string;
  postFirstName: string;
  postLastName: string;
}) => {
  const [newComment, setNewComment] = useState("");
  const firstLetterFirstName = postFirstName ? postFirstName.charAt(0) : null;
  const firstLetterLastName = postLastName ? postLastName.charAt(0) : null;

  const handlerSubmitComment = () => {
    axios
      .post(
        `${config.apiBase}/v1/posts/${postId}/comments`,
        { newComment, userId, postId },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          transition: "ease-in-out",
          borderTop: "1px solid #00003026",
          pt: "10px",
        }}
      >
        {comment ? (
          <Comment
            firstLetterFirstName={firstLetterFirstName}
            firstLetterLastName={firstLetterLastName}
            comment={comment}
          />
        ) : (
          <Typography sx={{ fontSize: "14px", p: "20px" }}>
            No comments to this post, feel free to add a comment! :)
          </Typography>
        )}
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "5px" }}>
          <TextField
            fullWidth
            placeholder="Write your comment here.."
            inputProps={{
              style: {
                height: "3.5px",
                width: "100%",
              },
            }}
            sx={{
              "& input::placeholder": {
                fontSize: "13px",
              },
            }}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
          <Button onClick={handlerSubmitComment} variant="outlined">
            POST
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
