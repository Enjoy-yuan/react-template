import React, { Component } from 'react'

export class index extends Component {

  render() {
    return <div>编辑页id: {this.props.match.params.id}</div>
  }
}

export default index
