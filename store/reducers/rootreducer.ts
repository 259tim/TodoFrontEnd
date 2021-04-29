import { combineReducers } from 'redux';
import questionReducer from './todoslice'

const rootReducer = combineReducers({questions: questionReducer})

export default rootReducer