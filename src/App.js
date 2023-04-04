import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");
  const [todos, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <TodoList todos={todos} setTodo={setTodo} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
}

export default App;
