import React, { Component } from 'react'

export default class login extends Component {
  render() {
    return (
      <div style={{ cursor: 'pointer' }} onClick={() => this.props.history.push('./admin')}>
        登录
      </div>
    )
  }
}
