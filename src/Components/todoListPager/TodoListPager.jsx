import React from "react";
import { useSelector } from "react-redux";

import {
  ContainerButtons,
  StyledButton,
  CountBadge,
  FilterCount,
} from "./todoListPager.styled";

const TodoListPager = ({ handleChange, getButtonStyle }) => {
  const {
    list: todos,
    currentCount,
    completedCount,
  } = useSelector((state) => state.todos);

  return (
    <>
      <FilterCount>
        <p>Total todos: {todos.length}</p>
      </FilterCount>

      <ContainerButtons>
        <StyledButton
          onClick={() => handleChange("all")}
          style={getButtonStyle("all")}
        >
          All
        </StyledButton>
        <StyledButton
          onClick={() => handleChange("current")}
          style={getButtonStyle("current")}
        >
          Current
          <CountBadge $count={currentCount}>{currentCount}</CountBadge>
        </StyledButton>
        <StyledButton
          onClick={() => handleChange("completed")}
          style={getButtonStyle("completed")}
        >
          Completed
          <CountBadge $count={completedCount}>{completedCount}</CountBadge>
        </StyledButton>
      </ContainerButtons>
    </>
  );
};

export default TodoListPager;
