import React, { useState } from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { Comments } from "./Comments";
import { CommentsButton } from "./CommentsButton";
import { Like } from "./Like";
import { PostType } from "./FeedPage";

export const Post = ({ post }: {post : PostType}) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const firstLetterFirstName = post.first_name
    ? post.first_name.charAt(0)
    : null;
  const firstLetterLastName = post.last_name ? post.last_name.charAt(0) : null;

  return (
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
        <Avatar sx={{ bgcolor: "primary.main" }}>
          {`${firstLetterFirstName}${firstLetterLastName}`}
        </Avatar>
        <Typography variant="h6" sx={{ fontSize: "16px" }}>
          {`${post.first_name} ${post.last_name}`}
        </Typography>
      </Stack>

      <Typography variant="body1" sx={{ p: "5px" }}>
        {post.content}
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
        <Like postId={post.id} userLikesPost={post.user_likes_post} />
        <CommentsButton
          isCommentOpen={isCommentOpen} 
          setIsCommentOpen={setIsCommentOpen}
          postId={post.id}
        />
      </Stack>

      <Collapse in={isCommentOpen}>
        <Comments
          post={post} isCommentOpen={isCommentOpen}
        />
      </Collapse>
    </Stack>
  );
};
