import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReducerPhotos from "./ReducerPhotos";

const rootReducer =  combineReducers ({
  photos: ReducerPhotos,
  form: formReducer
});

export default rootReducer;