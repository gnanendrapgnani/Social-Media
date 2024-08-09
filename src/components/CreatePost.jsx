import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const usetId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: usetId,
        title: postTitle,
        body: postBody,
        reactions: reaction,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
    navigate("/");
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="userId"
            placeholder="Your User ID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={postTitleElement}
            id="title"
            placeholder="Enter the title for your post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            ref={postBodyElement}
            id="body"
            placeholder="Enter the Contant for the you post..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reaction
          </label>
          <input
            type="text"
            className="form-control"
            ref={reactionElement}
            id="reaction"
            placeholder="How many people are reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Hash tags here
          </label>
          <input
            type="text"
            className="form-control"
            ref={tagsElement}
            id="tags"
            placeholder="Place enter the tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
