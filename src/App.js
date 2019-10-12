import React, { Component } from 'react';
import './App.css';

import Plate from './plate/Plate';
import Upload from './upload/Upload';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <p className="h5">SYTO13 calc</p>
          <Upload/>
        </nav>
        <div className="App-body">
          <Plate name='test'/>
        </div>
      </div>
    );
  }
}

export default App;
