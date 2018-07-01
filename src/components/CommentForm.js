import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "../styles/CommentForm.css";
import { connect } from "react-redux";
import {addComment} from "../actions/index";

class CommentForm extends Component {
  
  submit = (values, dispatch) => {
    const { username: name, comment: body } = values;
    const { path: id } = this.props;
    dispatch(addComment(id, name, body));
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

const MyCommentForm = reduxForm ({
  form: "CommentForm"
})(CommentForm);

export default connect(dispatch => ({ onSubmit: data => dispatch(addComment(data))}))(MyCommentForm);