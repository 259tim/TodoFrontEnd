import { createSlice } from '@reduxjs/toolkit'
import { rootState } from '../../store'

interface todoState {
    todoList: string[]
}

const initialState: todoState = {
    todoList : []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { 
        save: (state, action) => {
            state.todoList.push(action.payload)
            console.log(state.todoList)
        },
        remove: (state, action) => {
            state.todoList.splice(action.payload)
            console.log(state.todoList)
        }
    }
})

export const { save, remove } = todoSlice.actions;

export const selectTodoList = (state: rootState) => state.todo.todoList;

export default todoSlice.reducer;