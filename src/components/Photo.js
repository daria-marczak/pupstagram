import React from "react";
import { Link } from "react-router-dom";

import "../styles/Photo.css";

const Photo = ({ photo }) => {
  const { farm, server, id, secret, title } = photo;
  return (
    <Link key={id} to={`/${id}`} {...photo}>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    </Link>
  );
}

export default Photo;