import { Component } from 'react'
import { Button } from 'antd'
import { observer } from 'mobx-react'
import store from '../../../mobx'

export class index extends Component {
  render() {
    return (
      <div>
        count: {store.count} * price: {store.price} = total: {store.total}
        <br />
        <Button
          onClick={() => {
            store.incrementCount()
          }}
        >
          count++
        </Button>
        <Button
          onClick={() => {
            store.incrementPrice()
          }}
        >
          price++
        </Button>
        <Button
          onClick={() => {
            store.setCount()
          }}
        >
          setCount=10
        </Button>
        <Button
          onClick={() => {
            store.getFlowData()
          }}
        >
          getFlowData after axios
        </Button>
      </div>
    )
  }
}

export default observer(index)
