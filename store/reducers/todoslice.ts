import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        text: ""
    },
    reducers: { 
        store: (state, action) => {
            state.text = action.payload
        }
    }
})

export const {store} = todoSlice.actions

export default todoSlice.reducer