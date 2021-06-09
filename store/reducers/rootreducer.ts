import { combineReducers } from 'redux';
import questionReducer from './questionslice'

const rootReducer = combineReducers({questions: questionReducer})

export default rootReducer