import React, { Component } from "react";
import { connect } from "react-redux";

import Comment from "./Comment";
import "../styles/CommentList.css";

class CommentList extends Component {
  renderComments() {
    console.log(this.props.comments);
    const [comment] = this.props.comments;
    console.log(comment);
  }

  render() {
    return (
      <ul>
        <Comment />
        { this.renderComments() }
      </ul>
    );
  }
}

function mapStateToProps({ comments }) {
  return { comments }
}

export default connect(mapStateToProps)(CommentList);