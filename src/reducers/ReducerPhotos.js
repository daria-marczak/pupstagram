import { FETCH_PHOTOS } from "../actions/types";

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PHOTOS:
      return [...state, action.payload.data.photos.photo];
    default:
      return state;
  }
}