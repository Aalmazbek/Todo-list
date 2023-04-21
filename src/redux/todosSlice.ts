import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let datas
if (localStorage.getItem('todos')) {
  datas = JSON.parse(localStorage.getItem('todos') || "")
} else{
  localStorage.setItem('todos', JSON.stringify([]))
}

// export const todosSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     data: datas ? datas : [],
//     isLoading: false
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       state.data.unshift({
//         id: Date.now(),
//         title: action.payload,
//         status: false
//       })
//     },
//     deleteTodo: (state, {payload}) => {
//       state.data = state.data.filter(elem => elem.id !== payload)
//     },
//     editTodo: (state, {payload}) => {
//       state.data = state.data.map(elem => {
//         if (elem.id === payload.id) {
//           return({...elem, title: payload.title})
//         }
//         return elem
//       })
//     },
//     onSatusChange: (state, {payload}) => {
//       state.data = state.data.map(elem => {
//         if (elem.id === payload) {
//           return({...elem, status: !elem.status})
//         }
//         return elem
//       })
//     }
//   }
// })


interface todosState {
  data: {id: number, title: string, status: boolean}[],
  isLoading: boolean
}

const initialState = {
  data: datas,
  isLoading: false
} as todosState

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<string>) => {
      state.data.unshift({
        id: Date.now(),
        title: action.payload,
        status: false
      })
    },
    deleteTodo: (state, action:PayloadAction<number>) => {
      state.data = state.data.filter(elem => elem.id !== action.payload)
    },
    editTodo: (state, action:PayloadAction<{ id: number, title: string }>) => {
      state.data = state.data.map(elem => {
        if (elem.id === action.payload.id) {
          return({...elem, title: action.payload.title})
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