// import CC from './components/CC'
import FC from './components/FC'

function App() {
  return (
    <>
      {/* <CC /> */}
      <FC />
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

export default App
