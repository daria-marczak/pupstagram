import React from "react";
import "../styles/Photo.css";

const Photo = ({ photo }) => {
  console.log(photo);
  return (
      <img src={photo} className="photo" alt="dog" />
  );
}

export default Photo;