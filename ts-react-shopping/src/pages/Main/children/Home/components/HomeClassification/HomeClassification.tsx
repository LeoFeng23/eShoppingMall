// @flow
import * as React from 'react';
import './HomeClassification.scss'
import {HomeClassificationItem} from "./HomeClassificationItem/HomeClassificationItem";
import {useDispatch, useSelector} from "react-redux";
import index, {GlobalState} from "../../../../../../store";
import {useEffect} from "react";
import {getCateList} from "../../../../../../store/actions/Home/HomeAction";

type Props = {
    children?: any
};
export const HomeClassification = (props: Props) => {

    const cateList = useSelector((state: GlobalState) => state.home.cateList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCateList());
    }, [dispatch])

    return (
        <div className="home-classification">
            {
                cateList && cateList.length > 0 &&
                cateList.map((item, index) => {
                    return (
                        <HomeClassificationItem key={index} {...item}/>
                    )
                })
            }
        </div>
    );
};
