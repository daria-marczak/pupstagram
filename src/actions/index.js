import { FETCH_PHOTOS, ADD_COMMENT, FETCH_COMMENTS, INCREMENT_LIKES } from "./types";
import axios from "axios";

export function fetchPhotos() {
  const response = axios.get("https://dog.ceo/api/breed/husky/images");
  return {
    type: FETCH_PHOTOS,
    payload: response
  };
}

export function fetchComments() {
  const response = axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

export function addComment(id, name, body) {
  return {
    type: ADD_COMMENT,
    payload: { id, name, body }
  };
}

export function incrementLikes(id) {
  return {
    type: INCREMENT_LIKES,
    id
  }
}