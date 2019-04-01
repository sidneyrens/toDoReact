import React, { Component } from 'react';
import Todos from './Todos';
import AddToDo from './AddForm';

class App extends Component {
  state = {
    todos: [{ id: 1, content: 'buy some milk' }, { id: 2, content: 'play some crash' }]
  };
  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addToDo = (todo) => {

  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddToDo addToDo={this.addToDo}/>
      </div>
    );
  }
}

export default App;
