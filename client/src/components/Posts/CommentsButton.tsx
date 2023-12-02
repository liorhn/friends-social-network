import React, { useState } from "react";
import { Button } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

export const CommentsButton = ({isCommentOpen, setIsCommentOpen} : {isCommentOpen : boolean, setIsCommentOpen: (state : boolean) => void}) => {
  const [isCommentColor, setIsCommentColor] = useState(false);

  const handleCommentClick = () => {
    setIsCommentOpen(!isCommentOpen);
    setIsCommentColor(!isCommentColor);
  };

  return (
    <>
      <Button onClick={handleCommentClick}>
        {isCommentColor ? <CommentIcon /> : <CommentOutlinedIcon />}
      </Button>
    </>
  );
};
