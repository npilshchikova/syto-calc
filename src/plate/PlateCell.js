import React, { Component } from 'react';
import './PlateCell.css';

class PlateCell extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      color: 'smpl',
    };

    this.updateColor = this.updateColor.bind(this);
  }

  updateColor() {
    this.state.color === 'smpl' ? 
      this.setState({ color: 'std' }) :
      this.setState({ color: 'smpl' })
  }

  render() {
    return (
      <div className="plate-cell card" onClick={this.updateColor}>
        <p className="card-title">{this.props.sampleName} - {this.props.cellId} - {this.state.color}</p>
        <p className="card-text">{this.props.fluorescence}</p>
      </div>
    );
  }
};

export default PlateCell;
