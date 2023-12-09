import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Button } from "@mui/material";
import axios from "axios";
import { config } from "../../config/config";

export const Like = ({
  postId,
  userLikesPost,
}: {
  postId: number;
  userLikesPost: number;
}) => {
  const [isLikedPost, setIsLikedPost] = useState(!!userLikesPost);

  const handlerLikedButton = () => {
    setIsLikedPost(!isLikedPost);

    if (!isLikedPost) {
      axios
        .post(
          `${config.apiBase}/v1/posts/${postId}/likes`,
          {},
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
        });
    } else {
      axios
        .delete(`${config.apiBase}/v1/posts/${postId}/likes`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  return (
    <>
      <Button onClick={handlerLikedButton}>
        {isLikedPost ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
      </Button>
    </>
  );
};
