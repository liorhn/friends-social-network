import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Button } from "@mui/material";
import axios from "axios";
import { config } from "../../config/config";

export const Like = ({
  postId,
  userId,
  userLikesPost,
}: {
  postId: number;
  userId: number;
  userLikesPost: number;
}) => {
  const [isLikedPost, setIsLikedPost] = useState(!!userLikesPost);

  const handlerLikedButton = () => {
    setIsLikedPost(!isLikedPost);

    const method = isLikedPost ? "put" : "post";

    axios[method](
      `${config.apiBase}/v1/posts/${postId}/likes`,
      { postId, userId },
      { withCredentials: true }
    ).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <Button onClick={handlerLikedButton}>
        {isLikedPost ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
      </Button>
    </>
  );
};
