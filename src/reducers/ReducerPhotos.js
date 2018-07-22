import { FETCH_PHOTOS, INCREMENT_LIKES } from "../actions/types";

export default function(state = [], action) {  
  switch(action.type) {
    case FETCH_PHOTOS:
      return [...state, action.payload.data.message];
    case INCREMENT_LIKES:
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1)
      ]; 
    default:
      return state;
  }  
}