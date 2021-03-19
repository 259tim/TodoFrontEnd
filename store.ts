import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './store/reducers/todoslice'

export default configureStore({
    reducer: {
        todo: todoReducer
    }
})