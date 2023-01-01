import React, { useState, useEffect }from "react";

const RobotPosts = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => response.json())
      .then((post) => {
        setPosts(post);
      });
  }, []);
  console.log(posts)
  return (
    <div>
      <h1 className="text-center">Robot posts</h1>
      <div className="borderLine"></div>
    </div>
  );
};

export default RobotPosts;
