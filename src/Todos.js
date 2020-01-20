import React from 'react';

const Todos = (props) => {
  const {todos, deleteTodo} = props;
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item #e1bee7 purple lighten-4" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;