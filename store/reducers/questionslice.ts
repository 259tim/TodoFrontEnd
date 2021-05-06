import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { rootState } from '../../store'
import api from "../../config/apiconfig";
import Base64 from 'js-base64';
import { useDispatch, useSelector } from 'react-redux';
import mystore from '../../store';

// the types for this slice's state: a list of objects, a status, and a possible error
interface questionState {
    questions: object[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined
}

// the initial values in the state: basically just empty
const initialState: questionState = {
    questions : [],
    status: 'idle',
    error: undefined
}


// this is a thunk, it comes from the redux-thunk package, it is not default to redux
// a thunk allows for creating functions that have asynchronous logic, getting from APIs and anything else web.
// these functions can then interact with the store. In this case we store a list of questions.
// see https://redux.js.org/tutorials/fundamentals/part-6-async-logic for the documentation used to make this.

export const fetchQuestions = createAsyncThunk('questions/fetchquestions', async () =>{
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + Base64.btoa("tim.seip@capgemini.com" + ":" + "adminpw"))
    
    const response = await fetch(api + "/api/questions", {
            headers: headers,
            method: 'GET'
    })
    const stuff = await response.json();
    // console.log(stuff)
    return stuff;

})

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    // This slice has two actions: Save and remove, doing exactly what they say.
    // They take a current state and then do something with it, pushing  to and logging the new state.
    // In this case they take a list of strings, the todoList, and then push this to the stack in the Redux store.
    reducers: { 
        save: (state, action) => {
            state.questions.push(action.payload)
            console.log(state.questions)
        },
        remove: (state, action) => {
            console.log('removing')
            state.questions.splice(0, 10000)
        }
    },
    // the extrareducers allow you to modify secondary values, in this case we use it to
    // influence the status that we can then read if needed.
    // extrareducers use the (builder) => {builder.addcase()} logic because of typescript.
    // https://redux.js.org/recipes/usage-with-typescript/ 
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state, action) => {
            console.log('pending')
            return state = {
                ...state,
                status: 'loading'
            }
        }),
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {

            // Add any fetched posts to the array
            console.log('fulfilled')
            
            return state = {
                ...state,
                status: 'succeeded',
                questions: action.payload
            }
        })
        builder.addCase(fetchQuestions.rejected, (state, action) => {
            console.log('rejected')
            return state = {
                ...state,
                status: 'loading',
                error: action.error.message
            }
        })
      } 
    }
)

// here we export the defined actions, these can then be called to run them

export const { save, remove } = questionSlice.actions;

//these are the selectors, they do what it says: Select things from the store.
// example: const foo = useSelector(selectQuestions); would get all the questions from the store and put them in 'foo'
export const selectQuestions = (state: rootState) => state.questions.questions;
export const selectStatus = (state: rootState) => state.questions.status;

// here we export the whole thing as reducer, to add it to the rootreducer, found in rootreducer.ts
// this rootreducer is then used to build the store, and it would also contain all other slices.
export default questionSlice.reducer;
