import { ADD_COMMENT, FETCH_COMMENTS } from "../actions/types";

function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      console.log("Adding from reducer");
      return [...state, 
        action.payload
      ];
    case FETCH_COMMENTS:
    console.log("FEtching");
      return [...state, action.payload.data];
    default:
      return state;
  }
  
}

export default comments;