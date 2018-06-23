import { FETCH_PHOTOS } from "./types";
import axios from "axios";

export function fetchPhotos() {
  const response = axios.get("https://dog.ceo/api/breeds/list/all");
  console.log(response);
  return {
    type: FETCH_PHOTOS,
    payload: response
  };
}