import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import PostList from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card postCard" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <p>{post.reaction}</p>
        {post.tag.map((tag) => (
          <span className="hashTag">{`#${tag} `}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;
