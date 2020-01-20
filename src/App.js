import Todos from './Todos'
import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }


  render (){
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
