// import './App.css';

import { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from '../../routes'
import './index.css'
import Frame from './Frame'

class App extends Component {
  render() {
    return (
      <Frame>
        <Switch>
          {adminRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
                // render={(routeProps) => {
                //   return <route.component {...routeProps} />
                // }}
              ></Route>
            )
          })}
          <Redirect to="/notFound"></Redirect>
        </Switch>
      </Frame>
    )
  }
}

export default App
