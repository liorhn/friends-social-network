import React, { useState } from "react";
import { Stack, Avatar, Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { CommentsComponent } from "./CommentsComponent";
import Collapse from '@mui/material/Collapse';



export const PostComponent = () => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isCommentColor, setIsCommentColor] = useState(false);
  const [isLikedColor, setIsLikedColor] = useState(false);

  const handleCommentClick = () => {
    setIsCommentOpen(!isCommentOpen);
    setIsCommentColor(!isCommentColor);
  };

  const handleLikedButtonColor = () => {
    setIsLikedColor(!isLikedColor);
  };

  return (
    <>
      <Stack
        sx={{
          maxWidth: "500px",
          maxHeight: "600px",
          justifyContent: "center",
          flexDirection: "coulmn",
          alignItems: "cetner",
          gap: "10px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          p: "20px",
          m: "20px auto",
        }}
      >
        <Stack sx={{ flexDirection: "row", gap: "10px", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "primary.main" }}>LH</Avatar>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            Lior Haninaev
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ p: "5px" }}>
          {
            'Second,paragraph is used to choose the basic component of Typography.If paragraph is true ,the Typography is "p".If paragraph is false,check the two default setting, or the Typography will be "span".'
          }
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "100px",
            pt: "10px",
            borderTop: "1px solid #00003026",
          }}
        >
          <Button onClick={handleLikedButtonColor}>
            {isLikedColor ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
          </Button>
          <FavoriteIcon sx={{ color: "secondary.main" }}></FavoriteIcon>
          <Button onClick={handleCommentClick}>
            {isCommentColor ? <CommentIcon /> : <CommentOutlinedIcon />}
          </Button>
        </Stack>
        <Collapse in={isCommentOpen}><CommentsComponent /></Collapse>
      </Stack>
    </>
  );
};
