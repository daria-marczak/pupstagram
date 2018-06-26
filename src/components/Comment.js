import React from "react";
import { Field, reduxForm } from "redux-form";
import "../styles/Comment.css";

let Comment = () => {
  return (
    <form>
      <Field name="username" className="username field"  placeholder="Username" component="input"/>
      <Field name="comment" className="comment field" placeholder="Comment" component="input"/>
    </form>
  );
}

export default Comment = reduxForm ({
  form: "CommentForm"
})(Comment);