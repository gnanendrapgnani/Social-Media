import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      <div className="cardContainer">
        {postList.length === 0 && <WelcomeMsg />}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
