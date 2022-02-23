<<<<<<< HEAD
import React, { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

function App() {
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <p>呈現資料</p>
      <table border="1">
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        陣列最前面新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        陣列最後面新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.text.includes('a')
          })
          // console.log(newData)
          setData(newData)
        }}
      >
        尋找(過濾)只呈現所有文字有a字母的
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.text !== 'b'
          })
          console.log(newData)
          setData(newData)
        }}
      >
        刪除文字為b的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.id !== 99
          })
          // console.log(newData)
          setData(newData)
        }}
      >
        刪除id為99的物件
      </button>
      <br />
      <button
        onClick={() => {
          const index = data.findIndex((v, i) => {
            return v.id === 2
          })
          // console.log(index)
          const newData = [...data]
          // console.log(newData.slice(0, index + 1))
          const newObj = { id: 5, text: 'bbb' }
          setData([
            ...newData.slice(0, index + 1),
            newObj,
            ...newData.slice(index + 1),
          ])
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          const index = data.findIndex((v, i) => {
            return v.id === 3
          })
          // console.log(index)
          const newData = [...data]
          newData[index].text = 'cccc'
          setData(newData)
        }}
      >
        取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          const oId = data.map((v, i) => {
            return v.id
          })
          const maxId = Math.max(...oId)
          // console.log(maxId)
          const newObj = { id: maxId + 1, text: 'xxx' }
          const newData = [newObj, ...data]
          setData(newData)
        }}
      >
        陣列最前面新增一個物件值id不重覆與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const oId = data.map((v, i) => {
            return v.id
          })
          const maxId = Math.max(...oId)
          // console.log(maxId)
          const newObj = { id: maxId + 1, text: 'yyy' }
          const newData = [...data, newObj]
          setData(newData)
        }}
      >
        陣列最後面新增一個物件值id不重覆與文字為yyy的物件
      </button>
    </>
  )
}

=======
import { useState } from 'react'
import Parent from './components/Parent'
// import Menu from './homework1/Menu'

// import { data } from './data/student'
// 導入一般js物件檔案
// import students from './data/student.json'
// 導入json會自動轉為js物件

function App() {
  return (
    <>
      <Parent />
    </>
  )
}
// const oldData = (items) => {
//   const menuData = []
//   for (let i = 0; i < items.length; i++) {
//     menuData.push({
//       id: i + 1,
//       name: items[i],
//       active: false,
//     })
//   }
//   return menuData
// }

// function App() {
//   const arr = ['首頁', '關於我們', '產品']
//   const defaultData = oldData(arr)
//   const [menuItem, setMenuItem] = useState(defaultData)
//   return (
//     <>
//       <Menu
//         arr={arr}
//         defaultData={defaultData}
//         menuItem={menuItem}
//         setMenuItem={setMenuItem}
//       />
//     </>
//   )
// }

// function App() {
//   const newData = data.map(function (v, i) {
//     return <li>{v.name}</li>
//   })
//   console.log('students:', students)
//   console.log(newData)
//   return (
//     <>
//       <ul>
//         {data.map(function (v, i) {
//           return <li key={i}>{v.name}</li>
//         })}
//       </ul>
//     </>
//   )
// }
>>>>>>> cf451eb7a438f0349022fbcd3138c90837c3679b
export default App
