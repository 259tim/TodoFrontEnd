import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { rootState } from '../../store'
import api from "../../config/apiconfig";
import Base64 from 'js-base64';

interface todoState {
    questions: object[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined
}

const initialState: todoState = {
    questions : [],
    status: 'idle',
    error: undefined
}

export const fetchQuestions = createAsyncThunk('questions/fetchquestions', async () =>{
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + Base64.btoa("tim.seip@capgemini.com" + ":" + "adminpw"))
    
    const response = await fetch(api + "/api/questions", {
            headers: headers,
            method: 'GET'
        })
    const stuff = await response.json();
    return stuff;
})

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: { 
        save: (state, action) => {
            state.questions.push(action.payload)
            console.log(state.questions)
        },
        remove: (state, action) => {
            state.questions.splice(action.payload)
            console.log(state.questions)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state, action) => {
          state.status = 'loading'
        }),
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.questions = state.questions.concat(action.payload)
        }),
        builder.addCase(fetchQuestions.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
      } 
    }
)



export const { save, remove } = questionSlice.actions;

export const selectTodoList = (state: rootState) => state.questions.questions;
export const selectStatus = (state: rootState) => state.questions.status;

export default questionSlice.reducer;
