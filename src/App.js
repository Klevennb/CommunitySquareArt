import React, { Component } from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 10,
      gameOn: false
    }
  }
  componentDidUpdate(){
    if (this.state.timer === 0) {
      this.stopGame();
    }
    
  }
  stopGame = () => {
    if (this.state.gameOn === true) {
      this.setState({
        gameOn: false
      })
    }

  }
  populateBoxes =()=>{
    let box = <Square gameOn={this.state.gameOn}/>;
    let arr = [box];
    for (let index = 0; index < 1082; index++) {
      arr.push(box)
    }
    return arr.map(
      (boxes, i) => boxes
    )
  }
  startGame = () =>{
    if (this.state.timer < 5) {
      window.location.reload();
    }
    this.setState({
      gameOn: true
    })
    this.timerID = setInterval(
      () => this.setState({timer: this.state.timer - 1}),
      1000
    );
  }

  findBest=(highest) =>{
    let best = 500;
    let lowest = 500;
    let prices=[4,9,320,16,99];
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < best && prices[i] < best){
        lowest = prices[i];
      }
    }
    console.log('The answer is:', lowest);
    
  }
  render() {
    return (
      <div className="App">
        <div><h1>Box Fill Game</h1></div>
        {this.state.gameOn?<div><h2>Time Left:{this.state.timer}</h2></div>:<div><h1>Game Over</h1></div>}
        <div><h2>Score:{this.props.reduxState.whiteReducer}</h2></div>
        <div><button onClick={this.startGame}>Start Game</button></div>
        <div className='display-area'>
          {this.populateBoxes()}
        </div>
      </div>

    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);