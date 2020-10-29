// @flow
import * as React from 'react';
import {Main} from "./Main/Main";
import { Switch, Route, Redirect } from 'react-router-dom';

type Props = {};
type State = {};

export class RootPage extends React.Component<Props, State> {
    render() {
        return (
            <Switch>
                <Route path={'/main'} component={Main}/>
                <Route path={'/another'} render={(props:any) => {return (<div>6546532134613</div>)}}/>
                <Route path={'/'} >
                    <Redirect to={'/main'} />
                </Route>
            </Switch>
        );
    };
}
