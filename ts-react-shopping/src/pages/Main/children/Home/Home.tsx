// @flow
import * as React from 'react';
import {TopBar} from './components/TopBar/TopBar';
import './Home.scss'
import {ScrollBox} from "../../../../components/ScrollBox";
import {HomeBanner} from "./components/HomeBanner/HomeBanner";
import {HomeClassification} from "./components/HomeClassification/HomeClassification";


type Props = {};
type State = {};

export class Home extends React.Component<Props, State> {
    render() {
        return (
            <div className={`home-page`}>
                <TopBar/>
                <ScrollBox className={`content`}>
                    <HomeBanner/>

                    <HomeClassification />
                </ScrollBox>
            </div>
        );
    };
};
