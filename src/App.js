import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 100
    }
  }
  populateBoxes =()=>{
    let box = <Square />;
    let arr = [box];
    for (let index = 0; index < 1090; index++) {
      arr.push(box)
    }
    return arr.map(
      (boxes, i) => boxes
    )
  }
  startGame = () =>{
    this.timerID = setInterval(
      () => this.setState({timer: this.state.timer - 1}),
      1000
    );
  }
  render() {
    return (
      <div className="App">
        <div><h1>Box Fill Game</h1></div>
        <div><h2>Time Left:{this.state.timer}</h2></div>
        <div><button onClick={this.startGame}>Start Game</button></div>
        <div className='display-area'>
          {this.populateBoxes()}
        </div>
      </div>

    );
  }
}

export default App;
