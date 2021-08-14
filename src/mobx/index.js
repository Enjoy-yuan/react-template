import { makeAutoObservable, autorun } from 'mobx'
import axios from 'axios'

class Store {
  // 等价于vuex中的state
  count = 1
  price = 10
  constructor() {
    makeAutoObservable(this)
  }
  // 等价于vuex中的mutations
  incrementCount() {
    this.count++
  }
  incrementPrice() {
    this.price++
  }
  setCount() {
    this.count = 10
  }
  // 等价于vuex中的getters
  get total() {
    return this.count * this.price
  }
  // 等价于vuex中的actions，使用ES6中的generator生成器
  *getFlowData() {
    // 该接口请求不需要考虑跨域问题
    yield axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
      console.log(res.data)
      this.setCount()
    })
    console.log('请求之后打印')
  }
}
const store = new Store()

// 切换路由和count值改变时被触发
autorun(() => {
  console.log('count被修改:', store.count)
})

export default store
