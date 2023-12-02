import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeaderDashboard } from "../Dashboard/HeaderDashboard";
import { config } from "../../config/config";
import { Box } from "@mui/material";
import { PostsList } from "./PostsList";
import { CreatePost } from "./CreatePost";
// import Skeleton from "@mui/material/Skeleton";

export type Post = {
  id: number;
  content: string;
  user_id: number;
  first_name: string;
  last_name: string;
};

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.apiBase}/v1/posts`, { withCredentials: true })
      .then((response) => {
        setPosts(response.data.result);
        setPostsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeaderDashboard></HeaderDashboard>
      <Box>
        <CreatePost />
        {postsLoading ? <PostsList posts={posts} /> : null}
        {/* I want to put here Skeleton, ask haims guide for that shit */}
      </Box>
    </>
  );
};
