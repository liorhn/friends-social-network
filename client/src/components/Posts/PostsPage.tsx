import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeaderDashboard } from "../Dashboard/HeaderDashboard";
import { config } from "../../config/config";
import { Box } from "@mui/material";
import { PostsList } from "./PostsList";
import { CreatePost } from "./CreatePost";
import { PostsSkeleton } from "./PostsSkeleton";

export type PostType = {
  id: number;
  content: string;
  user_id: number;
  first_name: string;
  last_name: string;
  user_likes_post: number;
};

export const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [postsLoaded, setPostsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.apiBase}/v1/posts`, { withCredentials: true })
      .then((response) => {
        setPosts(response.data.result);
        setPostsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeaderDashboard></HeaderDashboard>
      <Box>
        <CreatePost onCreate={(lastNewPost : any) => {setPosts([lastNewPost, ...posts])}} />
        {postsLoaded ? <PostsList posts={posts} /> : <PostsSkeleton />}
      </Box>
    </>
  );
};
