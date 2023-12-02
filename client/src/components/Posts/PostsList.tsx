import React from "react";
import { Post } from "./Post";
import { Post as PostType } from "./Posts";

export const PostsList = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </>
  );
};
