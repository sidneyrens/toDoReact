import React from 'react';

const Todos = ({ todos, deleteToDo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteToDo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p>You have no todos left, YAY!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
