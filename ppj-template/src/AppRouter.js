import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader'

import App from "./App";
import TestPage from './containers/TestPage';

class AppRouter extends React.Component {
    render() {
        return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" component={TestPage}/>
                </Switch>
            </App>
        </Router>
        )
    }
}

export default hot(module)(AppRouter)