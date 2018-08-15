import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/SinglePhoto.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";


class SinglePhoto extends Component {
  componentDidMount() {
    const { photos } = this.props;
    const [photoArray] = photos;

    if (!photoArray) return <p>Loading</p>;
  }

  renderPhoto() {
    const { photos } = this.props;
    const [photoArray] = photos;

    if (!photoArray) return <p>Loading</p>;

    const current = photoArray.filter(photo => {
      if (this.props.match.params.id === photo.id) return photo;
    });

    const [currentPhoto] = current;

    console.log(currentPhoto);
    const { id, farm, server, secret, comment: {_content : content}, title } = currentPhoto;

    console.log(content);
    return (
        <div className="post">
          <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
          <figure>
            <figcaption>
              <h3>{title}</h3>
              <p>{content}</p>
            </figcaption>
            {/* <CommentList /> */}
            {/* <CommentForm path={pathName} /> */}
          </figure>
        </div>
    )
  }

  render() {
    return (
      <div className="SinglePhoto">
        <Link to="/"><h1>Pupstagram</h1></Link>
        {this.renderPhoto()}
      </div>
    );
  }
}

function mapStateToProps({ photos }) {
  return { photos };
}

export default connect(mapStateToProps)(SinglePhoto);

// const SinglePhoto = ( props ) => {
//   console.log(props);
//   return (
//     <div className="SinglePhoto">
//          <Link to="/"><h1>Pupstagram</h1></Link>
//          <div className="post">
//            {/* <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} /> */}
//           <figure>
//              <figcaption>One of Shakespeare’s most mischievous characters is Crab, the dog belonging to Launce in the Two Gentlemen of Verona. The word \"watchdog\" is first found in The Tempest.</figcaption>
//              <CommentList />
//              {/* <CommentForm path={pathName} /> */}
//            </figure>
//          </div>
//        </div>
//   )
// }

// export default SinglePhoto;