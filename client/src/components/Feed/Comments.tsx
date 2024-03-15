import React, { useState, useEffect } from "react";
import { Stack, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { config } from "../../config/config";
import { Comment } from "./Comment";
import { PostType } from "./FeedPage";

export type CommentType = {
  comment: string;
  id: number;
  userId: number;
  post_id: number;
};

export const Comments = ({
  post,
  isCommentOpen,
}: {
  post: PostType;
  isCommentOpen: boolean;
}) => {
  const [newComment, setNewComment] = useState("");
  const firstLetterFirstName = post.first_name
    ? post.first_name.charAt(0)
    : null;
  const firstLetterLastName = post.last_name ? post.last_name.charAt(0) : null;
  const [comments, setComments] = useState<CommentType[]>([]);

  const postId = post.id;
  const userId = post.user_id;

  const commentsForEachPost = comments.filter((comment: CommentType) => {
    return comment.post_id === postId;
  });

  useEffect(() => {
    axios
      .get(`${config.apiBase}/v1/posts/${postId}/comments`, {
        withCredentials: true,
      })
      .then((response) => {
        setComments(response.data.result);
      });
  }, [postId, isCommentOpen]);

  const handlerSubmitComment = () => {
    console.log("sucess");
    axios
      .post(
        `${config.apiBase}/v1/posts/${postId}/comments`,
        { newComment, userId, postId },
        { withCredentials: true }
      )
      .then((response) => {
        axios
          .get(`${config.apiBase}/v1/posts/${postId}/comments`, {
            withCredentials: true,
          })
          .then((response) => {
            const newComment = response.data.result;
            console.log(newComment);
            const lastNewComment = newComment[newComment.length - 1];
            setComments([...comments, lastNewComment]);
          });
      })  
      .catch((error) => {
        console.log(error);
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
        {comments.length !== 0 ? (
          commentsForEachPost.map((comment: CommentType, index) => (
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
