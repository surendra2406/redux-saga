import { all } from "redux-saga/effects";
import NewsSaga from "./newsSaga";
import userSaga from "./userSaga";

export default function* rootSaga(){
    yield all([
        userSaga(),
        NewsSaga()
    ])
}
