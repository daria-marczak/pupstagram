import React, { Component } from "react";
import { connect } from "react-redux";

import { FetchPhotos } from "../actions/index";
import SinglePhoto from "./SinglePhoto";

class PhotoGrid extends Component {
  renderPhotos() {

  }

  render() {
    return (
      <div>I'm the PhotoGrid
        <SinglePhoto />
      </div>
    );
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}

export default connect(mapStateToProps)(PhotoGrid);