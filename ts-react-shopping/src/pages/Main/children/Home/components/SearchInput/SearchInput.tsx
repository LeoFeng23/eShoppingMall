// @flow
import * as React from 'react';
import './SearchInput.scss'

type Props = {};
export const SearchInput = (props: Props) => {
    return (
        <div className="search-box">
            <label htmlFor="typeInput" className="input-label">
                <input type="text" id="typeInput" placeholder="想要找什么商品呢？"/>
            </label>

            <span className="search-button iconfont icon-search-2-line">
            </span>
        </div>
    );
};
