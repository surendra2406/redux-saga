import rootReducer from "./Reducers";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();

const store =createStore(rootReducer, applyMiddleware(sagaMiddleware) )
sagaMiddleware.run(rootSaga)

export default store;
