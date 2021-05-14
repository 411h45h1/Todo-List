import React from "react";
import { TodoItem } from "../interfaces";



const TodoTask = ({ todo, removeTodoItem }: TodoItem) => {
  return (
    <div className="todoItem">
        <p>{todo.todoName}</p>
      <button
        onClick={() => removeTodoItem(todo.todoName)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
