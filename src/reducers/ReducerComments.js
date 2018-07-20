import { ADD_COMMENT, FETCH_COMMENTS } from "../actions/types";

function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [...state, 
        action.payload
      ];
    case FETCH_COMMENTS:
      return action.payload.data;
    default:
      return state;
  }
  
}

export default comments;