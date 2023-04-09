import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Post from "./Post";

const RobotPosts = () => {
  const location = useLocation();
  const { robotInfo } = location.state;
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${robotInfo.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  };

  return posts ? (
    <div>
      <h1 className="text-center">{robotInfo.name} posts</h1>
      <div className="borderLine"></div>
      {posts.map((post, i) => {
        return <Post key={i} robotPost={post} />;
      })}
    </div>
  ) : (
    <h1 className="flex justify-center items-center h-screen">Loading Posts</h1>
  );
};

export default RobotPosts;
