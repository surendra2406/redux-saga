import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getusersAction } from "../Redux/Actions/usersAction"
import CardComponent from "./CardComponent";
import usersReducer from "../Redux/Reducers/usersReducer";

const UserComponent = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.usersReducer.users.data)
    const error = useSelector(state => state.usersReducer.users.error)
    const loading = useSelector(state => state.usersReducer.users.loading)

    // console.log(user, "in user compoont.....");


    useEffect(() => {

        dispatch(getusersAction())
    }, []);


    return (
        <div>
            {loading && <p>Loading.....</p>}
            
            {user && user.map((user)=>(
              <CardComponent user ={user} key ={user.id}/>  
        ))}

       
        </div>
    )
}
export default UserComponent;