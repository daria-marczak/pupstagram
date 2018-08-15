import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/SinglePhoto.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";


// class SinglePhoto extends Component {
//   componentDidMount() {
//     console.log(this.props.match.params.id);
//     const { photos: photoArray } = this.props;

//     photoArray.map(photo => {
//       photo.find(details => {
//         if (this.props.match.params.id === details.id) console.log(details);
//       });
//     });
//   }

//   render() {
//     // const pathName = path.substring(1);
//     return (
//       <div className="SinglePhoto">
//         <Link to="/"><h1>Pupstagram</h1></Link>
//         <div className="post">
//           {/* <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} /> */}
//           <figure>
//             <figcaption>One of Shakespeare’s most mischievous characters is Crab, the dog belonging to Launce in the Two Gentlemen of Verona. The word \"watchdog\" is first found in The Tempest.</figcaption>
//             <CommentList />
//             {/* <CommentForm path={pathName} /> */}
//           </figure>
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps({ photos }) {
//   return { photos };
// }

// export default connect(mapStateToProps)(SinglePhoto);

const SinglePhoto = ( props ) => {
  console.log(props);
  return (
    <div className="SinglePhoto">
         <Link to="/"><h1>Pupstagram</h1></Link>
         <div className="post">
           {/* <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} /> */}
          <figure>
             <figcaption>One of Shakespeare’s most mischievous characters is Crab, the dog belonging to Launce in the Two Gentlemen of Verona. The word \"watchdog\" is first found in The Tempest.</figcaption>
             <CommentList />
             {/* <CommentForm path={pathName} /> */}
           </figure>
         </div>
       </div>
  )
}

export default SinglePhoto;