import React, { useState } from "react";
import { Button } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";


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
  };

  return (
    <>
      <Button onClick={openCommentsSection}>
        {isCommentColor ? <CommentIcon /> : <CommentOutlinedIcon />}
      </Button>
    </>
  );
};
