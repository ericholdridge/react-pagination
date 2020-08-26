/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Posts = ({ posts, loading }) => {
  if(loading) {
    return <h1>Loading....</h1>
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
