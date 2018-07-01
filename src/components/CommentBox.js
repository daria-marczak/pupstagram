import React from "react";
import "../styles/Comment.css";

const CommentBox = (comment) => {
  if (!comment) {
    return { comment: {name: "", body: ""}};
  }
  console.log(comment);
  // const { comment: { user, text }} = comment;
  // console.log(user, text);
  return (
    <li >
      <p>
        {/* <strong>{user}</strong> */}
      </p>
    </li>
  );
}

export default CommentBox;