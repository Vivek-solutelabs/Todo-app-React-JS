import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([""]);

  const addTodo = (event) => {
    event.preventDefault();

    setTodos([
      ...todos,
      { text: input, id: Math.random() * 1000, completed: false },
    ]);
    setInput("");
  };

  return (
    <div className="App">
      <h1> Hello SoluteLabs </h1>

      <form>
        <input
          placeholder="Enter a Todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button
          type="submit"
          disabled={!input}
          class="btn btn-primary"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            id={todo.id}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
