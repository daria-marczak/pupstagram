import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/SinglePhoto.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { incrementLikes } from "../actions/index";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class SinglePhoto extends Component {
  render() {
    const { location: { pathname: path } } = this.props;
    const pathName = path.substring(1);

    console.log(this.props);
    const likes = Math.floor(Math.random() * Math.floor(150));

    const index = Math.floor(Math.random() * Math.floor(10));

    return (
      <div className="SinglePhoto">
        <Link to="/"><h1>Pupstagram</h1></Link>
        <div className="post">
          <img src={pathName} alt="dog" />
          <figure>
            <figcaption>One of Shakespeare’s most mischievous characters is Crab, the dog belonging to Launce in the Two Gentlemen of Verona. The word \"watchdog\" is first found in The Tempest.</figcaption>
            <div className="likes">
              <button className="thumbsUp">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button> 
              {likes}
            </div>
            <CommentList />
            <CommentForm path={pathName} />
          </figure>
        </div>
      </div>
    );
  }
}

function mapStateToProps({likes}) {
  return { likes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { incrementLikes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhoto);