import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './pages/layout'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { mainRoutes } from './routes'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Redirect exact from="/admin" to="/admin/dashboard" />
        <Route path="/admin" render={(routeProps) => <Layout {...routeProps} />} />
        {mainRoutes.map((route) => {
          return <Route key={route.path} {...route} />
          // return <Route key={route.path} path={route.path} component={route.component} />
        })}
        <Redirect to="/notFount" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
