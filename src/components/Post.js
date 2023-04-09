import React from "react";

const Post = ({ robotPost }) => {
  return (
    <div className="mx-auto w-full border-2 border-blue-200 rounded-lg m-2 p-2 md:w-4/5">
      {robotPost.body}
    </div>
  );
};

export default Post;
