import axios from "axios";
import * as type from "../types"
import { put, call, takeEvery } from "redux-saga/effects";

const APIURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=01bab15e387e42a9adb0b8336936f093"

async function getAPI() {
    const result = await axios.get(APIURL);
    console.log(result.data.articles,"saga");
    return result.data.articles;
}

function* fetchNews(action) {
    try {
        const news = yield call(getAPI);
        yield put({ type: type.GET_NEWS_SUCCESS, news: news })
    } catch (e) {
        yield put({ type: type.GET_NEWS_FAILED, message: e.message })
    }
}
function * NewsSaga(){
    yield takeEvery(type.GET_NEWS_REQUESTED, fetchNews)
}

export default NewsSaga;