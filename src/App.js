import { useState } from 'react'
import './App.css'

import OrderList from './components/OrderList'
// import ProductItem from './components/ProductItem'
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
// 商品的數量初始化
// const init = (arr) => {
//   const newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(1)
//   }
//   return newArr
// }

const productinit = (products) => {
  const arr = []
  for (let i = 0; i < products.length; i++) {
    arr.push({ ...products[i], count: 1 })
  }
  return arr
}

// console.log(productinit(products))
function App() {
  // const [count, setCount] = useState(init(prodproductinitucts))
  // + - 計算

  // 初始各項目產品
  const [productsInOrder, setProductInOrder] = useState(productinit(products))

  // 運費
  const [shoppingFree, setShoppingFree] = useState(0)

  // 計算商品數量
  const totalNumber = () => {
    let totalCount = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      totalCount += productsInOrder[i].count
    }

    return totalCount
  }

  // 小計
  const totalPrice = () => {
    let sum = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count * productsInOrder[i].price
    }

    return sum
  }

  // 總價
  const total = () => {
    let sum = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count * productsInOrder[i].price
    }

    return shoppingFree ? sum + shoppingFree : 0
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductInOrder={setProductInOrder}
        />
        <Summary
          setShoppingFree={setShoppingFree}
          totalNumber={totalNumber()}
          totalPrice={totalPrice()}
          total={total()}
        />
      </div>
    </div>
  )
}
export default App
