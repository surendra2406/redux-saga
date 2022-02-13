import * as type from "../types"

export function getusersAction(users){
    // console.log("users action called", users);
    return{
        type:type.GET_USERS_REQUESTED,
        payload:users
    }
}