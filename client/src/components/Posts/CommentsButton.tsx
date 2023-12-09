import React, { useState } from "react";
import { Button } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import axios from "axios";
import { config } from "../../config/config";

export const CommentsButton = ({
  isCommentOpen,
  setIsCommentOpen,
  postId,
}: {
  isCommentOpen: boolean;
  setIsCommentOpen: (state: boolean) => void;
  postId: number;
}) => {
  const [isCommentColor, setIsCommentColor] = useState(false);

  const openCommentsSection = () => {
    setIsCommentOpen(!isCommentOpen);
    setIsCommentColor(!isCommentColor);
    
    axios
      .get(`${config.apiBase}/v1/posts/${postId}/comments`, { withCredentials: true })
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button onClick={openCommentsSection}>
        {isCommentColor ? <CommentIcon /> : <CommentOutlinedIcon />}
      </Button>
    </>
  );
};
