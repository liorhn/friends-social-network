import React from "react";
import { Post } from "./Post";
import { PostType } from "./FeedPage";

export const PostsList = ({ currentPosts }: { currentPosts: PostType[] }) => {
  return (
    <>
      {currentPosts.map((post, index) => {
        return <Post key={index} post={post} />;    
      })}
    </>
  );
};
