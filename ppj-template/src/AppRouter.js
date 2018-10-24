import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader'

import App from "./App";
import TestPage from './containers/TestPage';
import PyeongJinPage from './containers/PyeongJinPage';
import JongMinPage from './containers/JongMinPage';
import JeYunPage from './containers/JeYunPage';
import GunHeePage from './containers/GunHeePage';

class AppRouter extends React.Component {
    render() {
        return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={TestPage}/>
                    <Route exact path="/pyeong" component={PyeongJinPage}/>
                    <Route exact path="/jongmin" component={JongMinPage}/>
                    <Route exact path="/jeyun" component={JeYunPage}/>
                    <Route exact path="/gunhee" component={GunHeePage}/>
                </Switch>
            </App>
        </Router>
        )
    }
}

export default hot(module)(AppRouter)