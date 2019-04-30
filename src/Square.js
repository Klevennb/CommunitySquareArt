import React, {Component} from 'react';
import { connect } from 'react-redux'
import Worker from 'webworkerTest';
class Square extends Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'square-white'
        }
    }
   

    changeColor = () => {
        let worker = new Worker('webworkerTest.js');
        // worker.addEventListener('message', function (e) {
        //     console.log('Worker said: ', e.data);
        // }, false);
        // console.log(worker);
        
        worker.postMessage("Hello World");
        if (this.props.gameOn === true) {
            if (this.state.color === 'square-black') {
                this.setState({ color: 'square-white' });
                const action = { type: 'WHITE'};
                this.props.dispatch(action);
            } else {
                this.setState({color:'square-black'});
                const action = { type: 'BLACK' };
                this.props.dispatch(action);
            }
        }

        
    }
    render(){
        return(
            <div className={this.state.color} onMouseOver={this.changeColor}>
            </div>
        )
    }
}

export default connect()(Square);