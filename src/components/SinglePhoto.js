import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/SinglePhoto.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { incrementLikes } from "../actions/index";
import { fetchPhotos } from "../actions/index";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class SinglePhoto extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }
  render() {
    const { location: { pathname: path }, likes: votes } = this.props;
    const pathName = path.substring(1);

    const likes = votes[1];    

    return (
      <div className="SinglePhoto">
        <Link to="/"><h1>Pupstagram</h1></Link>
        <div className="post">
          <img src={pathName} alt="dog" />
          <figure>
            <figcaption>One of Shakespeare’s most mischievous characters is Crab, the dog belonging to Launce in the Two Gentlemen of Verona. The word \"watchdog\" is first found in The Tempest.</figcaption>
            <div className="likes">
              <button className="thumbsUp" onClick={this.props.incrementLikes}>
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
  return bindActionCreators( { fetchPhotos, incrementLikes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhoto);