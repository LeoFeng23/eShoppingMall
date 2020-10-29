import {ThunkAction} from "redux-thunk";
import {HomeStateType} from "../../reducers/Home/HomeReducer";
import axios from 'axios'
import * as HomeActionTypeList from '../../reducers/Home/HomeActionTypeList'

export const getBannerList = (): ThunkAction<any, HomeStateType, any, any> => async (dispatch) => {
    await axios.get('/api/home/banner').then(result => {
        dispatch({
            type: HomeActionTypeList.GET_BANNER_LIST,
            data: {
                bannerList: result.data.data
            }
        });
    })
}

export const getCateList = (): ThunkAction<any, HomeStateType, any, any> => async (dispatch) => {
    await axios.get('/api/home/cate').then(result => {
        dispatch({
            type: HomeActionTypeList.GET_CATE_LIST,
            data: {
                cateList: result.data.data
            }
        })
    })
}
