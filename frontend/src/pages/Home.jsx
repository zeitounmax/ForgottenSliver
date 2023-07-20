import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.scss";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsFromServer = () => {
      fetch("http://localhost:8000/post/")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des articles:", error);
        });
    };

    fetchPostsFromServer();
  }, []);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <article className="post" key={post.id}>
            <div className="img">
              <img src={post.image} alt={post.description} />
            </div>
            <div className="content">
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <Link className="button" to={`/post/${post.id}`}>
                Lire en plus
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
