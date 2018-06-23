import React, { Component } from 'react';

import '../styles/App.css';
import PhotoGrid from "./PhotoGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pupstagram</h1>
        <PhotoGrid />
      </div>
    );
  }
}

export default App;