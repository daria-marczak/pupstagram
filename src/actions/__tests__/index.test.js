import { FETCH_PHOTOS, ADD_COMMENT, FETCH_COMMENTS } from "../types";
import { fetchPhotos, fetchComments, addComment } from "../index";
import { photosResponse } from "../../__mocks__/photos";

import ReduxPromise from "redux-promise";
import App from "../../components/App";
import moxios from "moxios";
import { shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from 'react-router';
import configureMockStore from "redux-mock-store";

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

describe("fetchPhotos", () => {
  const mockStore = configureMockStore([ReduxPromise]);

  beforeEach(() => {
    moxios.install();
  });
  
  it("has the correct type", () => {
    const action = fetchPhotos();
    expect(action.type).toEqual(FETCH_PHOTOS);
  });

  it("can fetch photos and display them", () => {

    moxios.stubRequest("https://dog.ceo/api/breed/husky/images", {
      status: 200,
      response: photosResponse
    });

    const returnedAction = [{
      type: FETCH_PHOTOS,
      response: photosResponse.img_url
    }];

    const store = mockStore({});
    
    return store.dispatch(fetchPhotos({
      ...photosResponse.img_url
    }))
    expect(store.getActions()).toEqual(returnedAction);
    done();
  });

  afterEach(() => {
    moxios.uninstall();
  })
});