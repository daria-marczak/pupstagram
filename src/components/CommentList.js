import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchComments } from "../actions/index";
import SingleComment from "./SingleComment";
import "../styles/CommentList.css";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments() {
    const [comments] = this.props.comments;
    if (!comments) {
      return [];
    };
    return (
      <SingleComment comment={comments}/>
    )
  }

  render() {
    return (
      <ul>
        { this.renderComments() }
      </ul>
    );
  }
}

function mapStateToProps({ comments }) {
  return { comments }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);