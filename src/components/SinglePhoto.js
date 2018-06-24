import React from "react";

const SinglePhoto = (photo) => {
  const { location: { pathname: path } } = photo;
  const pathName = path.substring(1);
  return (
    <figure>
      <img src={pathName} alt="dog" />
      <figcaption>A grateful little doggo</figcaption>
    </figure>
  );
}

export default SinglePhoto;