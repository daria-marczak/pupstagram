import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPhotos } from "../actions/index";
import SinglePhoto from "./SinglePhoto";

class PhotoGrid extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  renderPhotos() {
    console.log(this.props);
  }

  render() {
    return (
      <div>I'm the PhotoGrid
        <SinglePhoto />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchPhotos }, dispatch);
}

export default connect(null, mapDispatchToProps)(PhotoGrid);