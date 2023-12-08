import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeaderDashboard } from "../Dashboard/HeaderDashboard";
import { config } from "../../config/config";
import { Box, Stack, Skeleton } from "@mui/material";
import { PostsList } from "./PostsList";
import { CreatePost } from "./CreatePost";

export type Post = {
  id: number;
  content: string;
  user_id: number;
  first_name: string;
  last_name: string;
};

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.apiBase}/v1/posts`, { withCredentials: true })
      .then((response) => {
        setPosts(response.data.result);
        // setPostsLoading(true);
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
        {postsLoading ? <PostsList posts={posts} /> : <PostsSkeleton />}
      </Box>
    </>
  );
};

const PostsSkeleton = () => {
  const simulateList = React.useMemo(() => Array(5).fill(null), []);
  return (
    <>
      {simulateList.map((value, index) => (
        <Box
          key={index}
          sx={{
            maxWidth: "500px",
            minHeight: "200px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            p: "20px",
            m: "20px auto",
          }}
        >
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
            <Skeleton
              animation="wave"
              variant="circular"
              width={30}
              height={30}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Skeleton
                animation="wave"
                variant="text"
                width="60%"
                sx={{ fontSize: 8 }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="40%"
                sx={{ fontSize: 8 }}
              />
            </Box>
          </Stack>
          <Stack sx={{ mt: 2 }}>
            <Skeleton animation="wave" variant="text" sx={{ fontSize: 10 }} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: 10 }} />
            <Skeleton
              animation="wave"
              variant="text"
              width="90%"
              sx={{ fontSize: 10 }}
            />
          </Stack>
        </Box>
      ))}
    </>
  );
};
