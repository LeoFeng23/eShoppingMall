import {createStore, Reducer} from 'redux'
import {RootState} from "../../index";
import * as HomeActionTypeList from "./HomeActionTypeList";

export type rootActionType = {
    data: any,
    type: String
}

interface CateItem {
    picUrl: string

}

export interface HomeStateType extends RootState {
    bannerList: BannerType[],
    cateList: CateItem[],
}

interface BannerType {
    id: string,
    picUrl: string
}

const initialHomeState: HomeStateType = {
    bannerList: [],
    cateList: []
}

export const homeReducer: Reducer<HomeStateType, rootActionType> = (state : HomeStateType = initialHomeState, action) => {

    switch (action.type) {
        case HomeActionTypeList.GET_BANNER_LIST: {
            //..
            const result: HomeStateType = {
                ...state,
                bannerList: action.data.bannerList
            };
            return result
        }
        case HomeActionTypeList.GET_CATE_LIST: {
            return {
                ...state,
                cateList: action.data.cateList
            }
        }
    }

    return state
}
