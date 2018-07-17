import React from "react";
import "../styles/SingleComment.css";

const SingleComment = ({comment}) => {
  const { name, body } = comment;

  return (
    <li>
      <p>
        <strong>{name.slice(0, 7)}</strong>
        <span>
          {body.slice(0, 20)}
        </span>
      </p>
    </li>
  );
}

export default SingleComment;