import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { productsInOrder, setProductInOrder } = props

  const setCount = (newCount, i) => {
    // 從原陣列拷貝
    const newProductsInOrder = [...productsInOrder]
    newProductsInOrder[i].count = newCount < 1 ? 1 : newCount
    // 設定回原狀態
    setProductInOrder(newProductsInOrder)
  }

  const handleDelete = (id) => {
    // 從原陣列拷貝、處理
    const newProductInOrder = [...productsInOrder].filter((v, i) => {
      return v.id !== id
    })
    // 設定回原陣列
    setProductInOrder(newProductInOrder)
  }

  return (
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4>
              <b>訂購單</b>
            </h4>
          </div>
          <div className="col align-self-center text-right text-muted">
            {productsInOrder.length}種商品項目
          </div>
        </div>
      </div>

      {productsInOrder.map((v, i) => {
        return (
          <ProductItem
            key={v.id}
            name={v.name}
            categroy={v.categroy}
            image={v.image}
            price={v.price}
            count={v.count}
            handleDelete={() => {
              handleDelete(v.id)
            }}
            setCount={(newCount) => {
              setCount(newCount, i)
            }}
          />
        )
      })}

      <div className="back-to-shop">
        <a href="#/">
          <i className="fas fa-angle-left"></i>
        </a>
        <span className="text-muted">回到商品頁</span>
      </div>
    </div>
  )
}

export default OrderList
