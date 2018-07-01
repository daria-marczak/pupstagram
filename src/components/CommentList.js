import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchComments } from "../actions/index";
import CommentBox from "./CommentBox";
import "../styles/CommentList.css";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
    console.log(this.props);
  }
  renderComments() {

    const [comment] = this.props.comments;
    if (!comment) {
      return [];
    }
    return (
      <CommentBox comment={comment} />
    )
  }

  render() {
    return (
      <ul>
        <CommentBox />
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