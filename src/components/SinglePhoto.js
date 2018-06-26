import React from "react";
import { Link } from "react-router-dom";
import "../styles/SinglePhoto.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const SinglePhoto = (photo) => {
  const { location: { pathname: path } } = photo;
  const pathName = path.substring(1);
  return (
    <div className="SinglePhoto">
      <Link to="/"><h1>Pupstagram</h1></Link>
      <div className="post">
        <img src={pathName} alt="dog" />
        <figure>
          <figcaption>One of Shakespeare’s most mischievous characters is Crab, the dog belonging to Launce in the Two Gentlemen of Verona. The word \"watchdog\" is first found in The Tempest.</figcaption>
          <CommentList />
          <CommentForm />
        </figure>
      </div>
    </div>
  );
}

export default SinglePhoto;