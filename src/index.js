import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './pages/layout'
import store from './store'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { mainRoutes } from './routes'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={(routeProps) => <Layout store={store} {...routeProps} />} />
      {mainRoutes.map((route) => {
        return <Route key={route.path} {...route} />
        // return <Route key={route.path} path={route.path} component={route.component} />
      })}
      <Redirect to="/notFount" />
    </Switch>
  </Router>,
  document.getElementById('root')
)
