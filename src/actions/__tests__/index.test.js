import { FETCH_PHOTOS, ADD_COMMENT, FETCH_COMMENTS } from "../types";
import { fetchPhotos, fetchComments, addComment } from "../index";

describe("addComment", () => {
  it("has the correct type", () => {
    const action = addComment();
    expect(action.type).toEqual(ADD_COMMENT);
  });

  it("has the correct payload", () => {
    const action = addComment(43, "Test", "Testing comment");
    expect(action.payload).toEqual({"id": 43, "name": "Test", "body": "Testing comment"});
  });
});