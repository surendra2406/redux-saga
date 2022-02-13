import { combineReducers } from "redux";
import usersReducer from "../Reducers/usersReducer";

const rootReducer  = combineReducers({
    
    usersReducer:usersReducer
})

export default rootReducer;