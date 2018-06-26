import React from "react";
import Comment from "./Comment";
import "../styles/CommentList.css";

const CommentList = () => {
  return (
    <ul>
      <Comment />
      <Comment />
      <Comment />
    </ul>
  );
}

export default CommentList;