import React, { useState } from 'react'
// import './App.css'

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
    name: '灰色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 100,
  },
]
// 初始化狀態用，各項商品皆為1筆
const init = (arr) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(1)
  }
  return newArr
}
function App() {
  const [counts, setCounts] = useState(init(products))
  // const [counts, setCounts] = useState(Array(products.length).fill(1))
  // 設定初始值

  const setCount = (newCount, i) => {
    // 拷貝原陣列
    const newCounts = [...counts]
    // 拷貝後的陣列上修改
    newCounts[i] = newCount
    // 設定回原狀態
    setCounts(newCounts)
  }

  // 數量
  const totalNumber = () => {
    let tNumber = 0
    for (let i = 0; i < counts.length; i++) {
      tNumber += counts[i]
    }
    return tNumber
  }
  // 總價
  const totalPrice = () => {
    let tPrice = 0
    for (let i = 0; i < counts.length; i++) {
      tPrice += counts[i] * products[i].price
    }
    return tPrice
  }

  return (
    <>
      <h2>總數量：{totalNumber()}</h2>
      <h2>總價{totalPrice()}：</h2>
      <hr />
      {products.map((v, i) => {
        return (
          <React.Fragment key={v.id}>
            <h2>
              商品{v.id}:{v.name}/{v.price}
            </h2>
            <button
              onClick={() => {
                setCount(counts[i] + 1, i)
              }}
            >
              +
            </button>
            <p>{counts[i]}</p>
            <button
              onClick={() => {
                if (counts[i] > 1) {
                  setCount(counts[i] - 1, i)
                }
              }}
            >
              -
            </button>
          </React.Fragment>
        )
      })}
    </>
  )
}
export default App
