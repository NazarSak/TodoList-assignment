import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import {
  toggleTodo,
  addTodo,
  removeTodo,
  setFilter,
} from "../../redux/todoSlice";
import { FilterCount, StyledButton, CountBadge } from "./todoList.styled";

function TodoList() {
  const {
    list: todos,
    filter,
    currentCount,
    completedCount,
  } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const uniqueID = shortid.generate();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(
      addTodo({
        id: uniqueID,
        text,
        completed: false,
      })
    );
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          required={true}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <FilterCount>Total todos: {todos.length}</FilterCount>
      <div>
        <StyledButton onClick={() => dispatch(setFilter("all"))}>
          All
        </StyledButton>
        <StyledButton onClick={() => dispatch(setFilter("current"))}>
          Current
          <CountBadge count={currentCount}>{currentCount}</CountBadge>
        </StyledButton>
        <StyledButton onClick={() => dispatch(setFilter("completed"))}>
          Completed
          <CountBadge count={completedCount}>{completedCount}</CountBadge>
        </StyledButton>
      </div>
      <ul>
        {todos
          .filter((todo) => {
            if (filter === "all") return true;
            if (filter === "current") return !todo.completed;
            if (filter === "completed") return todo.completed;
          })
          .map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
