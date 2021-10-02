import { combineReducers } from "redux";
import path from './path';
import file from './file';
const myReducer = combineReducers({
    path,
    file
})

export default myReducer