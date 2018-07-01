import { ADD_COMMENT } from "../actions/types";

function addComment(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [...state, {
        user: action.author,
        text: action.content
      }];
    default:
      return state;
  }
}

export default addComment;