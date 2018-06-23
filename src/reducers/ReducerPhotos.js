import { FETCH_PHOTOS } from "../actions/types";

export default function(state = [], action) {
  console.log(action, state);
  switch(action.type) {
    case FETCH_PHOTOS:
      return [...state, action.payload.data];
    default:
      return state;
  }
}