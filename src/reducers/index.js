import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReducerPhotos from "./ReducerPhotos";
import ReducerComments from "./ReducerComments";

const rootReducer =  combineReducers ({
  photos: ReducerPhotos,
  form: formReducer,
  comments: ReducerComments
});

export default rootReducer;