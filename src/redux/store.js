



import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as productReducer } from "./Products/reducer";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
    authReducer, 
    productReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
