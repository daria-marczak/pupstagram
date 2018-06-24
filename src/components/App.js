import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import '../styles/App.css';
import PhotoGrid from "./PhotoGrid";
import SinglePhoto from "./SinglePhoto";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pupstagram</h1>
        <PhotoGrid />
        <Switch>
          <Route path={`/:index`} component={SinglePhoto} />
        </Switch>
      </div>
    );
  }
}

export default App;