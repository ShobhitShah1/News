import { applyMiddleware } from "redux";
import { createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "../Reducers/AuthReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));