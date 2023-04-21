import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { todosReducer } from "./todosSlice";


export const store = configureStore({
  reducer: todosReducer
})


export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector



store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('todos', JSON.stringify(state.data))
})