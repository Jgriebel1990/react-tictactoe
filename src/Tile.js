import React, { Component } from 'react';

class Tile extends Component{
    tileClick(props) {
        props.updateBoard(props.loc, props.turn);
    }
    render(){
        return(
            <div className='square' onClick={() => this.tileClick(this.props)}>
                <p>{this.props.value}</p>
            </div>
        );
    }

}

export default Tile