import { applyMiddleware, configureStore, createStore, Store } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import rootReducer from './store/reducers/rootreducer'

// https://levelup.gitconnected.com/persisting-your-react-application-state-with-redux-and-typescript-51e4e66c4e53 < for persist
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const mystore = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export type rootState = ReturnType<typeof mystore.getState>
export type AppDispatch = typeof mystore.dispatch
export default mystore;