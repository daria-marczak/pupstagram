import { FETCH_PHOTOS } from "./types";
import axios from "axios";

export function fetchPhotos() {
  const response = axios.get("https://dog.ceo/api/breed/beagle/images");
  return {
    type: FETCH_PHOTOS,
    payload: response
  };
}