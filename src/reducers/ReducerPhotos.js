import { FETCH_PHOTOS, INCREMENT_LIKES } from "../actions/types";

export default function(state = [], action) {  
  switch(action.type) {
    case FETCH_PHOTOS:
    console.log(action);
      return [...state,action.payload.data.message];
    case INCREMENT_LIKES:
      console.log("incrementing")
      return [
        action.likes +1
      ]; 
    default:
      return state;
  }  
}