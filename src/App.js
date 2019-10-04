import React from 'react';
import logo from './brand.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      <div className="App-body">
        <p className="h1">SYTO13 calc demo</p>
        <div>
          <input type="file" name="file"/>
        </div>
      </div>
    </div>
  );
}

export default App;
