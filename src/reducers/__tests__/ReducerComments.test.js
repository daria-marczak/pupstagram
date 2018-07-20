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