import React from "react";
import completedIcon from "../assets/images/completed.svg";
import editedIcon from "../assets/images/edited.svg";
import deletedIcon from "../assets/images/deleted.svg";

export default function TodoList({ todos, setTodo, setEditTodo }) {

	const handleEdit = ({ id }) => {
			const findTodo = todos.find((todo) => todo.id === id);
			setEditTodo(findTodo);
	}

  const handleComplete = (todo) => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = ({ id }) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <button
            className="button-complete task-button"
            onClick={() => handleComplete(todo)}
          >
            <img src={completedIcon} alt="" />
          </button>
          <button
            className="button-complete task-button"
            onClick={() => handleEdit(todo)}
          >
            <img src={editedIcon} alt="" />
          </button>
          <button
            className="button-complete task-button"
            onClick={() => handleDelete(todo)}
          >
            <img src={deletedIcon} alt="" />
          </button>
        </li>
      ))}
    </div>
  );
}
