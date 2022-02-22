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
export default App
