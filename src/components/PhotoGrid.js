import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../styles/PhotoGrid.css";
import { fetchPhotos } from "../actions/index";
import Photo from "./Photo";

class PhotoGrid extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  renderPhotos() {
    console.log(this.props.photos);
    const [photosArray] = this.props.photos;
    if (!photosArray) {
      return <p>Loading...</p>;
    }

    return photosArray.map((photo, index) => {
      const { farm, server, id, secret } = photo;
      return (
        <Link key={id} to={`/${photo}`}>
          <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}/>
        </Link>
    )
    });
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoGrid));