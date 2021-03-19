import { createSlice } from '@reduxjs/toolkit'

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

export const {store} = todoSlice.actions

export const selectText = (state: todoState) => state.text

export default todoSlice.reducer