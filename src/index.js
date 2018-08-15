import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import ReduxPromise from "redux-promise";
import { connectRouter, routerMiddleware, ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import App from "./components/App";
import reducers from "./reducers";
import SinglePhoto from "./components/SinglePhoto";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(routerMiddleware(history), ReduxPromise))
);

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path={`/:id`} component={SinglePhoto} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
