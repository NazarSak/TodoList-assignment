import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../redux/todoSlice";
import { Checkbox } from "@mantine/core";
import { List,InfoMessage } from "./todoList.styled";

const TodoList = ({ todos }) => {
  const { filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  let emptyMessage = "";

  switch (filter) {
    case "all":
      emptyMessage = "Welcome! Add your tasks";
      break;
    case "current":
      emptyMessage = "Good Job! You don't have any tasks";
      break;
    case "completed":
      emptyMessage = "You don't complete your tasks";
      break;
    default:
      emptyMessage = "Welcome! Add your tasks";
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "current") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  if (filteredTodos.length === 0) {
    return <InfoMessage>{emptyMessage}</InfoMessage>;
  }

  return (
    <List>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span>{todo.text}</span>
          <Checkbox
            color="red"
            radius="xs"
            indeterminate
            onChange={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </Checkbox>
        </li>
      ))}
    </List>
  );
};

export default TodoList;
