import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import FormTask from "../form/form";
import TodoList from "../todolist/TodoList";
import TodoListPager from "../todoListPager/TodoListPager";
// Components
import shortid from "shortid";
import { addTodo, setFilter } from "../../redux/todoSlice";
import { Container } from "./app.styled";

const App = () => {
  const [text, setText] = useState("");

  const { list: todos, filter } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const uniqueID = shortid.generate();

  const getButtonStyle = (buttonFilter) => ({
    backgroundColor: filter === buttonFilter ? "#007bff" : "orange",
    color: filter === buttonFilter ? "#fff" : "#000",
  });

  const handleChange = (value) => {
    dispatch(setFilter(value));
  };

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
    <Container>
      <FormTask handleSubmit={handleSubmit} text={text} setText={setText} />

      <TodoListPager
        handleChange={handleChange}
        getButtonStyle={getButtonStyle}
      />

      <TodoList todos={todos} />
    </Container>
  );
};

export default App;
