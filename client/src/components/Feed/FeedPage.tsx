import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeaderDashboard } from "../Dashboard/HeaderDashboard";
import { config } from "../../config/config";
import { Box, Typography } from "@mui/material";
import { PostsList } from "./PostsList";
import { CreatePost } from "./CreatePost";
import { PostsSkeleton } from "./PostsSkeleton";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userInfoSlice";
import { PostPagination } from "./Pagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = posts.length;

  const handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${config.apiBase}/v1/posts`, { withCredentials: true })
      .then((response) => {
        setPosts(response.data.result);

        const firstName = response.data.result[0].first_name;
        const lastName = response.data.result[0].last_name;
        const email = response.data.result[0].email;

        dispatch(setUserInfo({ firstName, lastName, email }));

        setPostsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      <HeaderDashboard />
      <Box component="section" sx={{ mt: "50px" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "primary.main",
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: "40px",
            textDecoration: "underline",
          }}
          variant="h4"
          component="h1"
        >
          My Feed
        </Typography>
        <CreatePost
          onCreate={(lastNewPost: PostType) => {
            setPosts([lastNewPost, ...posts]);
          }}
        />
        {postsLoaded ? (
          <PostsList currentPosts={currentPosts} />
        ) : (
          <PostsSkeleton />
        )}
      </Box>
      <PostPagination
        postPerPage={postPerPage}
        totalPosts={totalPosts}
        onPageChange={handlePageChange}
      />
    </>
  );
};
