import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

// Components
import Container from "./components/Container";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetchPosts();
    setLoading(false);
  }, []);

  // Get the all of the posts
  const fetchPosts = async () => {
    const response = await Axios("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
    console.log(response.data);
  };

  // Change the page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage; //10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // Display postPerPage amount

  return (
    <div className="App">
      <Container>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Container>
    </div>
  );
}

export default App;
