import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoType } from "../types";

let datas
if (localStorage.getItem('todos')) {
  datas = JSON.parse(localStorage.getItem('todos') || "")
} else{
  localStorage.setItem('todos', JSON.stringify([]))
  window.location.reload();
}


interface todoSliceType {
  data: todoType[],
  isLoading: boolean
}

// const initialState = {
//   data: datas,
//   isLoading: false
// } as todoSliceType

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: datas,
    isLoading: false
  } as todoSliceType,
  reducers: {
    addTodo: (state, action:PayloadAction<string>) => {
      state.data.unshift({
        id: Date.now(),
        title: action.payload,
        status: false,
      })
    },
    deleteTodo: (state, action:PayloadAction<number>) => {
      state.data = state.data.filter(elem => elem.id !== action.payload)
    },
    editTodo: (state, action:PayloadAction<{ id: number, inputValue: string }>) => {
      state.data = state.data.map(elem => {
        if (elem.id === action.payload.id) {
          return({...elem, title: action.payload.inputValue})
        }
        return elem
      })
    },
    onSatusChange: (state, action:PayloadAction<number>) => {
      state.data = state.data.map(elem => {
        if (elem.id === action.payload) {
          return({...elem, status: !elem.status})
        }
        return elem
      })
    }
  }
})



export const { addTodo, deleteTodo, editTodo, onSatusChange } = todosSlice.actions
export const todosReducer = todosSlice.reducer