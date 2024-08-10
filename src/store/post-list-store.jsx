import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currList, action) => {
  //   let newPostList = currList;
  //   if (action.type === "DELETE_POST") {
  //     newPostList = currList.filter((post) => post.id !== action.payload.postId);
  //   } else if (action.type === "ADD_INITIAL_POSTS") {
  //     newPostList = action.payload.posts;
  //   } else if (action.type === "ADD_POST") {
  //     if (
  //       action.payload.userId === "" ||
  //       action.payload.title === "" ||
  //       action.payload.body === "" ||
  //       action.payload.reaction === "" ||
  //       action.payload.tags === ""
  //     ) {
  //       alert("Enter the All input felid to submit");
  //     } else {
  //       newPostList = [action.payload, ...currList];
  //     }
  //   }
  //   return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
