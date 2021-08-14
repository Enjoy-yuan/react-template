import { Component } from 'react'
import { Button } from 'antd'
import { observer } from 'mobx-react'
import store from '../../../mobx'

export class index extends Component {
  render() {
    return (
      <div>
        <p>
          {store.count}*{store.price}={store.total}
        </p>
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
          setCount
        </Button>
        <Button
          onClick={() => {
            store.getFlowData()
          }}
        >
          getFlowData
        </Button>
      </div>
    )
  }
}

export default observer(index)
