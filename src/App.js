import { useState } from 'react'
import './App.css'

import OrderList from './components/OrderList'
import Summary from './components/Summary'

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
]
const init = (arr) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(1)
  }
  return newArr
}
function App() {
  const [count, setCount] = useState(init(products))
  // + - 計算

  // 計算商品數量
  const totalNumber = () => {
    let totalCount = 0

    for (let i = 0; i < count.length; i++) {
      totalCount += count[i]
    }

    return totalCount
  }
  // 總價
  const totalPrice = () => {
    let sum = 0

    for (let i = 0; i < products.length; i++) {
      sum += count[i] * products[i].price
    }

    return sum
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList products={products} count={count} setCount={setCount} />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  )
}
export default App
