import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../styles/PhotoGrid.css";
import { fetchPhotos } from "../actions/index";
import Photo from "./Photo";

class PhotoGrid extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  renderPhotos() {
    const [photosArray] = this.props.photos;
    if (!photosArray) {
      return <p>Loading...</p>;
    }
    return photosArray.map((photo, index) => <Photo key={index} photo={photo}/>)
  }

  render() {
    return (
      <div className="photogrid">
        {this.renderPhotos()}
      </div>
    );
  }
}

function mapStateToProps({photos}) {
  return {photos};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchPhotos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);