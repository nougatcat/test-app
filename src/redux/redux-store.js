import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import employeesReducer from "./employees-reducer";
import { thunk as thunkMiddleware } from "redux-thunk";

let reducers = combineReducers({
    employeesPage: employeesReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;