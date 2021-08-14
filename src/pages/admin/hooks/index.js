import { useState, useEffect, useMemo } from 'react'
import { Button } from 'antd'

export default function Index(props) {
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(10)

  const total = useMemo(() => {
    return count * price
  }, [count, price])

  useEffect(() => {
    console.log('count被修改: ' + count)
  }, [count])
  
  return (
    <div>
      count: {count}*price: {price} =total: {total}
      <br />
      <Button onClick={() => setCount(count + 1)}>count++</Button>
      <Button onClick={() => setPrice(price + 1)}>price++</Button>
    </div>
  )
}
