import './App.css';

import React, { Component } from 'react';
import ChildCom from './ChildCom';

export default class App extends Component {
  state = {
    aaa: 111,
    inputValue: '',
    inputValue2: ''
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        aaa: 888
      });
    }, 1000);
  }
  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };
  inputChange2 = (e) => {
    this.setState({
      inputValue2: e.target.value
    });
  };
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange} />
        {this.state.inputValue}
        <input value={this.state.inputValue2} onChange={this.inputChange2} />
        {this.state.inputValue2}
        <ChildCom aaa={this.state.aaa} />
      </div>
    );
  }
}
