import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPhotos } from "../actions/index";
import Photo from "./Photo";

class PhotoGrid extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
    console.log(this.props.photos[0]);    
  }

  renderPhotos() {
    const [photos] = this.props.photos;
    console.log(photos);
    this.props.photos.map(photo => {
      return (
        <div>blah</div>
      )
    })
  }

  render() {
    return (
      <div>I'm the PhotoGrid
        {this.renderPhotos()}
      </div>
    );
  }
}

// const mapStateToProps = ({ photos }) => ({ photos});

function mapStateToProps({photos}) {
  console.log(photos);
  return {photos};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchPhotos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);