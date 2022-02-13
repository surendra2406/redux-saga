import React, { useState, useEffect } from "react";
import { Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import NewsAction from "../Redux/Actions/newsAction";
import NewsReducer from "../Redux/Reducers/newsReducer";
import SingleNews from "./SingleNews";


const SelectNewsList = async () => {

    const dispatch = useDispatch();
    const [country, setCountry] = useState("");

    let newsResult = [];


        newsResult = await useSelector(state => state.NewsReducer.newsList)

    // console.log(newsResult, "newsResult slected list page");
    dispatch(NewsAction())
    useEffect(() => {

    }, [newsResult]);


    return (
        <div>


            <h1>Select news list!</h1>

            <select onChange={(e) => { const selected = e.target.value; setCountry(selected) }}>
                <option value="us">US AMERICA </option>
                <option value="ca">CANADA</option>
                <option value="as">AUSRELLIA</option>

            </select>

            <SingleNews list ={newsResult} />

        </div>
    )
}
export default SelectNewsList;