import { FETCH_PHOTOS, INCREMENT_LIKES } from "../actions/types";

export default function(state = [], action) {  
  switch(action.type) {
    case FETCH_PHOTOS:
    console.log(action.payload, action.meta.likes);
      return [action.payload.data.message, action.meta.likes];
    case INCREMENT_LIKES:
      return [
        action.likes + 1
      ]; 
    default:
      return state;
  }  
}