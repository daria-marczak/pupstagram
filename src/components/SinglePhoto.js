import React from "react";
import { Link } from "react-router-dom";
import "../styles/SinglePhoto.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const SinglePhoto = (photo) => {
  const { location: { pathname: path } } = photo;
  const pathName = path.substring(1);

  const likes = Math.floor(Math.random() * Math.floor(150))

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
            </button> {likes}
          </div>
          <CommentList />
          <CommentForm path={pathName} />
        </figure>
      </div>
    </div>
  );
}

export default SinglePhoto;