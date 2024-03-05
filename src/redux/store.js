// src/redux/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice.js'; 

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
