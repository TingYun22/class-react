// import CC from './components/CC'
// import FC from './components/FC'

// import { data } from './data/student'
// 導入一般js物件檔案
// import students from './data/student.json'
// 導入json會自動轉為js物件

import Parent from './components/Parent'

function App() {
  return (
    <>
      {/* <CC /> */}
      {/* <FC /> */}
      <Parent />
    </>
  )
}

// function App() {
//   return (
//     <>
//       <h2>Number</h2>
//       {120}
//       {120 + 10}
//       <h2>Boolean</h2>
//       {true}
//       {false}
//       <h2>String</h2>
//       {'你好!'}
//       {'Hello~'}
//       {/* {'ap' + 'ple'} */}
//       <h2>Null / undefined</h2>
//       {null}
//       {undefined}
//       <h2>Array</h2>
//       {[1, 3, 5, 7, 'abc', null, undefined]}
//       <h2>Object(error)</h2>
//       {/* 不能直接嵌入jsx語法，會嚴重中斷錯誤 */}
//       {/* {{ a: 1, b: 2 }} */}
//       {new Date().toDateString()}
//       <br /> {new Date().toLocaleDateString()}
//       <h2>Function(warning)</h2>
//       {/* 但可直接呼叫 */}
//       {() => console.log(123)}
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
