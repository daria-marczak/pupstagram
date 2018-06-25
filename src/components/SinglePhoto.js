import React from "react";
import { Link } from "react-router-dom";
import "../styles/SinglePhoto.css";

const SinglePhoto = (photo) => {
  const { location: { pathname: path } } = photo;
  const pathName = path.substring(1);
  return (
    <div className="SinglePhoto">
      <Link to="/"><h1>Pupstagram</h1></Link>
      <figure>
        <img src={pathName} alt="dog" />
        <figcaption>A grateful little doggo</figcaption>
      </figure>
    </div>
  );
}

export default SinglePhoto;