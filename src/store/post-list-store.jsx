import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currList, action) => {
  let newPostList = currList;
  if (action.type === "DELETE_POST") {
    newPostList = currList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    if (
      action.payload.userId === "" ||
      action.payload.title === "" ||
      action.payload.body === "" ||
      action.payload.reaction === "" ||
      action.payload.tag === ""
    ) {
      alert("Enter the All input felid to submit");
    } else {
      newPostList = [action.payload, ...currList];
    }
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (usetId, postTitle, postBody, reaction, tags) => {
    // console.log(`${usetId}, ${postTitle}, ${postBody}, ${reaction}, ${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: usetId,
        title: postTitle,
        body: postBody,
        reaction: reaction,
        tag: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
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
