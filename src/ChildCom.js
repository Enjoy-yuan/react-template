import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChildCom extends Component {
  // componentDidMount() {
  //   console.log(this.props);
  // }
  state={}
  static getDerivedStateFromProps(nextProps){
    console.log(nextProps);
    return null
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }
  render() {
    // console.log(this.props);
    return (
      <div>
        子组件内容
        {this.props.name}
        {this.props.aaa}
      </div>
    );
  }
}

// ChildCom.propTypes = {
//   name: PropTypes.string.isRequired
// };

// // 设置默认值之后，可不用传参，校验不会报错
// ChildCom.defaultProps = {
//   name: 'Stranger'
// };

// import { useState, useEffect, useRef, createRef } from 'react';

// export default function ChildCom(props) {
//   console.log(props)
//   // useEffect(() => {
//   //   console.log(props)
//   // },[props.aaa]);

//   return (
//     <div>子组件
//     </div>
//   );
// }
