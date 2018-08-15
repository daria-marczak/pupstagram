import React from "react";
import "../styles/Photo.css";

const Photo = ({ photo }) => {
  const { farm, server, id, secret, title } = photo;
  return (
    <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
  );
}

export default Photo;