import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todosSlice";


export const store = configureStore({
  reducer: todosReducer
})


store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('todos', JSON.stringify(state.data))
})