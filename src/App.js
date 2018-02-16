import React, { Component } from 'react';
import Announcement from './Announcement';
import Tile from './Tile';
import ResetButton from './ResetButton';


class App extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: x,
      winner: null,

    }
  }
  updateBoard(loc, player){

  }
  resetBoard(){
    this.setState({
      gameboard: 
    })
  }
  render() {
    return (
     <div className='container'>
      <div className='menu'>
        <h1>tic tac toe</h1>
        <Announcement winner={this.state.winner}/>
        <ResetButton rest={this.resetBoard.bind(this)}/>
      </div>
        {this.state.gameBoard.map((value, index) => <Tile key={index} 
                                                          loc={index}
                                                          value={value}
                                                          updateBoard={this.updateBoard.bind(this)}
                                                          turn={this.state.turn} />)}
     </div>
    );
  }
}

export default App;
