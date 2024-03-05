// src/redux/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    filter: 'all',
    currentCount: 0, 
    completedCount: 0 
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = state.list.concat(action.payload);
      state.currentCount++; 
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
      const removedTodo = state.list.find(todo => todo.id === action.payload);
      if (removedTodo) {
        if (removedTodo.completed) {
          state.completedCount--; 
        } else {
          state.currentCount--;
        }
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        if (todo.completed) {
          state.completedCount++; 
          state.currentCount--; 
        } else {
          state.completedCount--; 
          state.currentCount++; 
        }
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTodo, removeTodo, toggleTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
