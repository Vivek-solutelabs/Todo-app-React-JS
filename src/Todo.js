import React, { useState } from "react";
import "./Todo.css";

function Todo({
  text,
  todo,
  todos,
  setTodos,
  setStatus,
  status,
  id,
  completed,
}) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(text);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };

  const edithandler = () => {
    setEdit((prevState) => !prevState);
  };

  const updateEdit = () => {
    console.log(todo.id);
    console.log(id);
    let updatedtodos = [];
    updatedtodos = todos.map((todo) => {
      //let name = { ...todo, text: input };
      //let my = todo.id === id ? "yess" : "no";
      // console.log(my);

      return todo.id === id ? { ...todo, text: input } : todo;
      //console.log(name);
    });
    console.log(updatedtodos);
    setTodos(updatedtodos);
    setInput(input);
    setEdit(false);
  };

  const completeTodo = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div class="container">
      <div>
        {edit ? (
          <div>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={updateEdit} type="submit" class="btn btn-dark">
              Submit
            </button>
          </div>
        ) : (
          <p class={`${todo.completed ? "completed" : "notcompleted"}`}>
            {text}
          </p>
        )}
      </div>

      <div className="flex-container">
        <span id="edit">
          <button onClick={edithandler} type="button">
            Edit
          </button>
        </span>
        <span id="delete">
          <button onClick={deleteHandler} type="button">
            Delete
          </button>
        </span>
        <div className={completed ? "completed" : "notcompleted-checkbox"}>
          <input
            onClick={completeTodo}
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
            Completed
          </label>
        </div>
      </div>
    </div>
  );
}

export default Todo;
