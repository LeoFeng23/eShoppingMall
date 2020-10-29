// @flow
import * as React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { navItemInfoRequiredType } from '../BottomNav';
import './BottomNavIItem.scss'


type Props = {
    info: navItemInfoRequiredType
};
export const BottomNavItem = (props: Props) => {

    // 通过参数获取路由的match属性，判断当前url是否匹配，若匹配到就将导航栏图标变为选中状态的图标
    const match = useRouteMatch(props.info.to.toString())

    return (
        <NavLink className={'nav-item-box'} to={props.info.to}>
            <i className={`nav-item-icon iconfont icon-${match ? props.info.activeIcon : props.info.icon}`}/>
            <p className={`nav-item-name`}>{props.info.name}</p>
        </NavLink>
    );
};
