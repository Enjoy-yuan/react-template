import { createStore } from 'redux'

const defaultState = {
  count: 1,
  price: 10
}

let reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'incrementCount':
      console.log(action.msg)
      return {
        ...state,
        count: state.count + 1
      }
    case 'incrementPrice':
      return {
        ...state,
        price: state.price + 1
      }
    default:
      return state
  }
}
const store = createStore(reducers)
export default store
