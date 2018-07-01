import { FETCH_PHOTOS, ADD_COMMENT } from "./types";
import axios from "axios";

export function fetchPhotos() {
  const response = axios.get("https://dog.ceo/api/breed/husky/images");
  return {
    type: FETCH_PHOTOS,
    payload: response
  };
}

export function addComment(id, author, content) {
  console.log("Dispatching add comment");
  return {
    type: ADD_COMMENT,
    id,
    author,
    content
  }
}