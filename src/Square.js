import React, {Component} from 'react';
import { connect } from 'react-redux'

class Square extends Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'square-white'
        }
    }
   

    changeColor = () => {
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