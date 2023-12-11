import React, { useState, useEffect } from "react";
import { Stack, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { config } from "../../config/config";
import { Comment } from "./Comment";
import { PostType } from "./PostsPage";

export const Comments = ({post} : {post : PostType}) => {
  const [newComment, setNewComment] = useState("");
  const firstLetterFirstName = post.first_name ? post.first_name.charAt(0) : null;
  const firstLetterLastName = post.last_name ? post.last_name.charAt(0) : null;
  const [comments, setComments] = useState([]);

  const postId = post.id;
  const userId = post.user_id;

  useEffect(() => {
    axios
      .get(`${config.apiBase}/v1/posts/${postId}/comments`, {
        withCredentials: true,
      })
      .then((response) => {
        setComments(response.data.result);
      })
  }, [postId]);

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
        {comments ? (
          comments.map((comment: any, index) => (
            <Comment
              key={index}
              firstLetterFirstName={firstLetterFirstName}
              firstLetterLastName={firstLetterLastName}
              comment={comment.comment}
            />
          ))
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
