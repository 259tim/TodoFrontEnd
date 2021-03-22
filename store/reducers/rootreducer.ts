import { combineReducers } from 'redux';
import todoReducer from './todoslice'

const rootReducer = combineReducers({todos: todoReducer})

export default rootReducer