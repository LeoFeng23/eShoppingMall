// @flow
import * as React from 'react';
import {BottomNavItem} from "./BottomNavItem/BottomNavItem";
import {LocationDescriptor, LocationState} from 'history';
import * as H from "history";
import './BottomNav.scss'

type Props = {
    sourceList: Array<navItemInfoRequiredType>
};

export type navItemInfoRequiredType = {
    name?: String,
    icon?: String,
    activeIcon?: String,
    to: H.LocationDescriptor | ((location: H.Location) => H.LocationDescriptor);
}
export const BottomNav = (props: Props) => {
    return (
        <nav className={'bottom-nav'}>
            {
                props.sourceList.map((item: navItemInfoRequiredType, index: number) => {
                    return <BottomNavItem info={item} key={index} />
                })
            }
        </nav>
    );
};
