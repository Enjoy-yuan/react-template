// import './App.css';

import { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from '../../routes'
import { observer } from 'mobx-react'

class App extends Component {
  render() {
  
    console.log(this.props)
    const { store } = this.props
    return (
      <div>
        <h1>layout</h1>
        <Switch>
          {adminRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={(routeProps) => {
                  return <route.component store={store} {...routeProps} />
                }}
              ></Route>
            )
          })}
          <Redirect to="/notFound"></Redirect>
        </Switch>
      </div>
    )
  }
}

// import ChildCom from './ChildCom';

// @observer
// class App extends Component {
//   state = {
//     aaa: 111,
//     inputValue: '',
//     inputValue2: ''
//   };
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         aaa: 888
//       });
//     }, 1000);
//   }
//   inputChange = (e) => {
//     this.setState({
//       inputValue: e.target.value
//     });
//   };
//   inputChange2 = (e) => {
//     this.setState({
//       inputValue2: e.target.value
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input value={this.state.inputValue} onChange={this.inputChange} />
//         {this.state.inputValue}
//         <input value={this.state.inputValue2} onChange={this.inputChange2} />
//         {this.state.inputValue2}
//         <ChildCom aaa={this.state.aaa} />
//       </div>
//     );
//   }
// }

// export default App

// import { observer } from 'mobx-react';
// import { Button } from 'antd';
// class App extends Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <div>
//         <h1>layout</h1>

//     );
//   }
// }

export default observer(App)
