import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fatching, setFatching] = useState(false);

  useEffect(() => {
    setFatching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFatching(false);
      });
    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, []);

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
