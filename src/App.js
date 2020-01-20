import Todos from './Todos'
import React, { Component } from 'react';
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [

    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render (){
    return (
      <div className="todo-app container #d500f9 purple accent-3">
        <h1 className="center #ce93d8 purple lighten-3">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
