import { combineReducers } from "redux";
import employeesReducer from "./employees-reducer";
import { configureStore } from "@reduxjs/toolkit";

let rootReducer = combineReducers({
    employeesPage: employeesReducer,
})

let store = configureStore({
    reducer: rootReducer
})

//let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// let store = createStore(reducers, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


export default store;