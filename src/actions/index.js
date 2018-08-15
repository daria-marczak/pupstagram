import { FETCH_PHOTOS, ADD_COMMENT, FETCH_COMMENTS } from "./types";
import axios from "axios";

export function fetchPhotos() {
  const response = axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=37497f8a763126c05d37583deb66679b&gallery_id=72157685568512954&format=json&nojsoncallback=1&auth_token=72157700233559555-97edbe386438829c&api_sig=e57d144467c2c321b7da5d82848a40a9");
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