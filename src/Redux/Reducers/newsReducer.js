import * as type from "../types"
let initialState ={
    newsList :[],

}


const NewsReducer =(state =initialState, action)=>{
    console.log("News Reducer calleld",state);

    if(action.type === type.GET_NEWS_REQUESTED){
        return {
            ...state 
        }
    }
    else if(action.type === type.GET_NEWS_SUCCESS){
        return {
            ...state ,
            newsList:action.news
        }
    }
    else if(action.type === type.GET_NEWS_FAILED){
        return {
            ...state ,
           error :action.message
        }
    }
    else{
        return state
    }
}

export default NewsReducer;
