import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchComments, addComment } from "../actions/index";
import SingleComment from "./SingleComment";
import "../styles/CommentList.css";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments() {
    const [...comments] = this.props.comments;
    if (!comments) {
      return [];
    };

    return comments.map((commentArray, id) => {
      return <SingleComment comment={commentArray} key={id}/>
    });
  }

  render() {
    return (
      <ul>
        { this.renderComments() }
      </ul>
    );
  }
}

function mapStateToProps({ comments, form }) {
  return { comments, form }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchComments, addComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);