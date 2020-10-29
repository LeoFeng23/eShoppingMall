// @flow
import * as React from 'react';
import './TopBar.scss'
import {SearchInput} from "../SearchInput/SearchInput";


type Props = {};
export const TopBar = (props: Props) => {
    return (
        <div className="home-page-title">
            <div className="title-inner">
                <h1 className="shop-title">XXX的店铺</h1>
                <SearchInput/>
            </div>
        </div>
    );
};
