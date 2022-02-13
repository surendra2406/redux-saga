import * as type from "../types";

let initialState ={
    users:[],
    loading:false,
    error: null
}


export default function usersReducer(state = initialState, action){
    // console.log("Reducer called", action);

    if(action.type === type.GET_USERS_REQUESTED)
    {
        // console.log("Get user match");
        // console.log({...state, users: [...state.users, {users:action.payload}]});
        return {
           ...state,
           loading:true,
        }
    }
    else if(action.type === type.GET_USERS_SUCCESS)
    {
        return {
           ...state,
           loading:false,
           users:action.users
        }
    }
    if(action.type === type.GET_USERS_FAILED)
    {
        return {
           ...state,
           loading:false,
           error:action.message
        }
    }

    else {
        return state;
    }
    // switch(action.type){
     
    //     case type.GET_USERS:
    //         return {
    //             ...state, users:action.payload
    //         }
    //     default :
    //     return state;    
    // }

}