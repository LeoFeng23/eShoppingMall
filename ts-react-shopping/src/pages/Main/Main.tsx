// @flow
import * as React from 'react';
import './Main.scss'
import {Redirect, Route, Switch, NavLink, useRouteMatch, match} from 'react-router-dom';
import {Home} from "./children/Home/Home";
import {Category} from "./children/Category/Category";
import {BottomNav} from "./components/BottomNav/BottomNav";
import { Cart } from './children/Cart/Cart';
import {Own} from "./children/Own/Own";


type Props = {
    match?: match
};
type State = {};

export class Main extends React.Component<Props, State> {

    bottomNavInfo = [
        {
            to: `${this.props.match?.path}/home`,
            icon: 'home-3-line',
            activeIcon: 'home-3-fill',
            name: '首页'
        },
        {
            to: `${this.props.match?.path}/cate`,
            icon: 'archive-drawer-line',
            activeIcon: 'archive-drawer-fill',
            name: '分类'
        },
        {
            to: `${this.props.match?.path}/cart`,
            icon: 'shopping-cart-line',
            activeIcon: 'shopping-cart-fill',
            name: '购物车'
        },
        {
            to: `${this.props.match?.path}/own`,
            icon: 'user-2-line',
            activeIcon: 'user-2-fill',
            name: '我的'
        },

    ]

    render() {
        const path = this.props.match?.path
        return (
            <div className={'main-page'}>
                <main className="page-inner">
                    <Switch>
                        <Route path={`${path}/home`} component={Home}/>
                        <Route path={`${path}/cate`} component={Category}/>
                        <Route path={`${path}/cart`} component={Cart}/>
                        <Route path={`${path}/own`} component={Own}/>
                        <Redirect to={`${path}/home`}/>
                    </Switch>
                </main>
                <div className="bottom-nav-box">
                    <BottomNav sourceList={this.bottomNavInfo} />
                </div>
            </div>
        );
    };
}
