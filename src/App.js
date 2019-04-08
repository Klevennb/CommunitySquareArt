import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class App extends Component {
  populateBoxes =()=>{
    let box = <Square />;
    let arr = [box];
    for (let index = 0; index < 100; index++) {
      arr.push(box)
    }
    return arr.map(
      (boxes, i) => boxes
    )
  }
  boxes = () =>{
    console.log('hi');
    
    return 
  }
  render() {
    return (
      <div className="App">
        <div><h1>Community Square Art</h1></div>
        <div>
          {this.populateBoxes()}
        </div>
      </div>

    );
  }
}

export default App;
