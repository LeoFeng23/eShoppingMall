import {homeReducer, HomeStateType} from "./reducers/Home/HomeReducer";
import { createStore, applyMiddleware, ReducersMapObject, Action, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {Reducer} from "react";

// const reducers: ReducersMapObject<CombineStateType>

// const combineReducer = combineReducers<CombineStateType>({
//     home: homeReducer,
// });

export interface RootState {

}


const combineReducer = combineReducers({
    home: homeReducer,
});

// export type GlobalState = ReturnState<typeof combineReducer>;
export interface GlobalState {
    home: HomeStateType
}
// 使用中间件
const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

// 加入devTools
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export default createStore(combineReducer, composedEnhancers);



