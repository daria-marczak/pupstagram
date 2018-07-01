import { ADD_COMMENT, FETCH_COMMENTS } from "../actions/types";

function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [...state, {
        name: action.name,
        body: action.body
      }];
    case FETCH_COMMENTS:
      return [...state, action.payload.data];
    default:
      return state;
  }
  
}

export default comments;