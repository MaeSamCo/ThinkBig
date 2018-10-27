import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import { ContextProvider } from './context/ContextMain'

import App from './App'
import TestPage from './containers/TestPage'
import PyeongJinPage from './containers/PyeongJinPage'
import JongMinPage from './containers/JongMinPage'
import GunHeePage from './containers/GunHeePage'
import Management from './containers/Management'
import CustomerContainer from './containers/CustomerContainer'
import PlaceViewing from './containers/PlaceViewing'

class AppRouter extends React.Component {
  render () {
    return (
      <Router>
        <ContextProvider>
          <App>
            <Switch>
              <Route exact path='/' component={TestPage} />
              <Route exact path='/pyeong' component={PyeongJinPage} />
              <Route exact path='/jongmin' component={JongMinPage} />
              <Route exact path='/management' component={Management} />
              <Route exact path='/CustomerPage' component={CustomerContainer} />
              <Route exact path='/gunhee' component={GunHeePage} />
              <Route exact path='/PlaceViewing' component={PlaceViewing} />
            </Switch>
          </App>
        </ContextProvider>
      </Router>
    )
  }
}

export default hot(module)(AppRouter)
