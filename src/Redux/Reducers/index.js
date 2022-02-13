import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import NewsReducer from "./newsReducer";


const rootReducer = combineReducers({
    usersReducer:usersReducer,
    NewsReducer:NewsReducer, 
    
})

export default rootReducer;