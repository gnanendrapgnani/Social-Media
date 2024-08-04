import { createContext, useReducer } from "react";

export const PostList = createContext({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currList, action) => {
  return currList;
};

const PostListProvider = ({ children }) => {
  const [postList, disatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {
    console.log(`The post you want to delete the id number is : ${postID}`);
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Chitradurga",
    body: "Hi friends i am go to my home town",
    reaction: 90,
    userId: "user-9",
    tag: ["vecation", "chitradurga"],
  },
  {
    id: "2",
    title: "Go to Chitanaduku",
    body: "Hi friends i am go to my home village",
    reaction: 27,
    userId: "user-10",
    tag: ["village", "chitanduku"],
  },
];

export default PostListProvider;
