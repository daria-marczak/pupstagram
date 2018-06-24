import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from "history";
import ReduxPromise from "redux-promise";
import { connectRouter, routerMiddleware, ConnectedRouter } from "connected-react-router";
import App from './components/App';
import reducers from "./reducers";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      ReduxPromise
    )
  )
)

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ ConnectedRouter>
  </Provider>
  , document.getElementById('root'));