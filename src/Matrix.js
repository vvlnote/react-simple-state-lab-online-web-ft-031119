import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }


}

Matrix.defaultProps = {
  values: (() => {
    let arrRows = new Array();
    for (let i = 0; i < 10; i++) {
      arrRows[i] = new Array();
      }
    for (let i = 0; i < 10; i++){
      for (let j= 0; j < 10; j++) {
        arrRows[i][j] = '#F00';
      }
    }
    return arrRows;
  })()

}

// Matrix.defaultProps ={
//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++){
//       values[i][j] = '#F00';
//     }
//   }
//   // values = [
//   //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
//   //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
  //   ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F']
  // ]
// };
