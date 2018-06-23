import { FETCH_PHOTOS } from "../actions/index";

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PHOTOS:
      return [...state, action.payload.data];
  }
  return state;
}