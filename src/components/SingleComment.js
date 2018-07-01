import React from "react";
import "../styles/SingleComment.css";

const SingleComment = ({comment}) => {
  return comment.map((text, index) => {
    const { name, body } = text;
    return (
      <li key={index}>
        <p>
          <strong>{name.slice(0, 7)}</strong>
          <span>
            {body.slice(0, 20)}
          </span>
        </p>
      </li>
    );
  })
}

export default SingleComment;