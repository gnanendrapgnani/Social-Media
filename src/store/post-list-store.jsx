import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currList, action) => {
  let newPostList = currList;
  if (action.type === "DELETE_POST") {
    newPostList = currList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
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
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

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
  const addInitialPosts = (posts) => {
    // console.log(`${usetId}, ${postTitle}, ${postBody}, ${reaction}, ${tags}`);
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );
  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
