import React from "react";
import { Post } from "./Post";
import { PostType } from "./PostsPage";

export const PostsList = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </>
  );
};
