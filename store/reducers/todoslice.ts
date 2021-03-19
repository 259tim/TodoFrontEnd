import { createSlice } from '@reduxjs/toolkit'
import { rootState } from '../../store'

interface todoState {
    text: string
}

const initialState: todoState = {
    text: "initialtext"
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { 
        store: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { store } = todoSlice.actions;

export const selectText = (state: rootState) => state.todo.text;

export default todoSlice.reducer;