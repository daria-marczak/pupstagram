import ReducerComments from "../ReducerComments";
import { ADD_COMMENT, FETCH_COMMENTS } from "../../actions/types";

it("handles action of type ADD_COMMENT", () => {
  const action = {
    type: ADD_COMMENT,
    payload: "Test"
  };

  const newState = ReducerComments([], action);
  expect(newState).toEqual(["Test"]);
});

// it("handles the action of type FETCH_COMMENTS", () => {
//   const action = {
//     type: FETCH_COMMENTS,
//     payload: "Fetched comments"
//   };

//   const newState = ReducerComments([], action);
//   expect(newState).toEqual(["Fetched comments"]);
// });