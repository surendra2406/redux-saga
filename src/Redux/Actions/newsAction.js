import * as type  from "../types"

const NewsAction =(news)=>{
    console.log("news Action called", news);
    return {
        type: type.GET_NEWS_REQUESTED,
        payload:news
    }
}

export default NewsAction;