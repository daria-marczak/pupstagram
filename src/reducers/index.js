import { combineReducers } from "redux";

import ReducerPhotos from "./ReducerPhotos";

const rootReducer =  combineReducers ({
  photos: ReducerPhotos
});

export default rootReducer;