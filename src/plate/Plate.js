import React, { Component } from 'react';
import './Plate.css';
import PlateCell from './PlateCell';


// constants for standard 96-well plate
const letters = Array.from(
  { length: 12 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i)
);
const indices = Array.from(Array(8).keys());
const cells = indices.reduce(
  (acc, v) => acc.concat(letters.map( w => w + (v + 1) )), []
);


class Plate extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCells() {
    return cells.map(id => (
      <PlateCell key={id} cellId={id}/>
    ));
  }

  renderLetterIds() {
    return letters.map( id => ( <div key={id}>{id}</div> ) );
  }

  renderNumberIds() {
    return indices.map( id => ( <div key={id}>{id + 1}</div> ) );
  }

  render() {
    return (
      <div className="plate">
        <h5 className="plate-header">Plate: {this.props.name}</h5>
        <div className="up-ids">{this.renderLetterIds()}</div>
        <div className="left-ids">{this.renderNumberIds()}</div>
        <div className="plate-body">
          {this.renderCells()}
        </div>
      </div>
    );
  }
};

export default Plate;
