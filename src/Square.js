import React, {Component} from 'react';

class Square extends Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'square-white'
        }
    }
   

    changeColor = () => {
        if (this.state.color === 'square-black') {
            this.setState({ color: 'square-white' })  
        } else {
            this.setState({color:'square-black'}) 
        }
        
    }
    render(){
        return(
            <div className={this.state.color} onMouseOver={this.changeColor}>
            </div>
        )
    }
}

export default Square;