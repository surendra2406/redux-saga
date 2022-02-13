import React, {useEffect} from "react";
import MenuBar from "../Components/MenuBar";
import {Button, FormSelect} from "react-bootstrap"
import SelectNewsList from "../Components/SelectNewsList";
import { useDispatch, useSelector } from "react-redux";
import { TestAction } from "../Redux/Actions";
import UserComponent from "../Components/UserComponent";

const HomeScreen =()=>{


    let msg = "Surendra"
    let dispatch = useDispatch();
    // let result =useSelector(state=>state.TestReducer)
    // console.log(result,"result");

    useEffect(() => {
    // dispatch(TestAction(msg))
    }, []);
    
    return(
        
        <div>
            <MenuBar/>
            <h1>Welocme to Home Screen-</h1>
       
            <SelectNewsList/>
            

    
        </div>
    )
}

export default HomeScreen;
