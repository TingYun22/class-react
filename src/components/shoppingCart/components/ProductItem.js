import React from 'react'
function ProductItem(props) {
  const { name, categroy, image, price, count, setCount, handleDelete } = props

  //   {
  //       id:1,
  //       name:'咖啡色 T-shirt',
  //       categroy:'Shirt',
  //       image:"https://i.imgur.com/1GrakTl.jpg",
  //       price:300
  //   }

  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img alt="" className="img-fluid" src={image} />
        </div>
        <div className="col">
          <div className="row text-muted">{categroy}</div>
          <div className="row">{name}</div>
        </div>
        <div className="col">
          <a
            href="#/"
            onClick={() => {
              if (count - 1 >= 1) setCount(count - 1)
            }}
          >
            -
          </a>
          <a href="#/" className="border">
            {count}
          </a>
          <a
            href="#/"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            +
          </a>
        </div>
        <div className="col">
          ${price}
          <span className="close" onClick={handleDelete}>
            &#10005;
          </span>
        </div>
      </div>
    </div>
  )
}
export default ProductItem
