import { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

class index extends Component {
  // 此处等价于vuex中的getters，和vue中的computed一样
  get total() {
    return this.props.count * this.props.price
  }
  render() {
    return (
      <div>
        count: {this.props.count} * price: {this.props.price} = total: {this.total}
        <br />
        <Button onClick={() => this.props.incrementCount('我是来自组件的数据')}>count++</Button>
        <Button onClick={() => this.props.incrementPrice()}>price++</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount(msg) {
      dispatch({
        type: 'incrementCount',
        msg
      })
    },
    incrementPrice() {
      dispatch({
        type: 'incrementPrice'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
