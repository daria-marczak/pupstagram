import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "../styles/CommentForm.css";

class CommentForm extends Component {
  
  submit = (values) => {
    console.log("submitting values", values);
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <Field name="username" className="username field"  placeholder="Username" component="input"/>
        <Field name="comment" className="comment field" placeholder="Comment" component="input"/>
        <button type="submit" hidden>Submit</button>
      </form>
    );
  }
}

export default CommentForm = reduxForm ({
  form: "CommentForm"
})(CommentForm);