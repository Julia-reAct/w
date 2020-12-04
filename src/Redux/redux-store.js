import {applyMiddleware, combineReducers, createStore} from "redux";
import cardsReducer from "./ReducerCards";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers( {
    cardspage: cardsReducer,
    form: formReducer,
 })
const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store