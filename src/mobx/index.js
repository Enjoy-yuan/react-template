import { makeAutoObservable, autorun } from 'mobx'
import axios from 'axios'

class Store {
  count = 1
  price = 10
  constructor() {
    makeAutoObservable(this)
  }
  incrementCount() {
    this.count++
  }
  incrementPrice() {
    this.price++
  }
  setCount() {
    this.count = 10
  }
  get total() {
    return this.count * this.price
  }
  *getFlowData() {
    yield axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
      console.log(res.data)
      this.setCount()
    })
    console.log('请求之后打印')
  }
}
const store = new Store()

autorun(() => {
  console.log('count:', store.count)
})

export default store
