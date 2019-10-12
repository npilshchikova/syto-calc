import React, { Component } from 'react';
import './Upload.css';

class Upload extends Component {
  render() {
    return (
      <div>
        <input type="file" name="file"/>
      </div>
    );
  }
};

export default Upload;
