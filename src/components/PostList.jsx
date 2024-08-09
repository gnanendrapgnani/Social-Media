import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fatching } = useContext(PostListData);

  return (
    <>
      <div className="cardContainer">
        {fatching && <LoadingSpinner />}
        {!fatching && postList.length === 0 && <WelcomeMsg />}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
