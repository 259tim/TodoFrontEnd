import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './store/reducers/todoslice'

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export type rootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;