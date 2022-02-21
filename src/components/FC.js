import { useState } from 'react'

// function FC() {
//   const [total, setTotal] = useState(0)

//   // const checkAndOutput = (value) => {
//   //   if (value > 0) {
//   //     return <p>總數大於0</p>
//   //   } else {
//   //     return <p></p>
//   //   }
//   // }
//   // 複雜判斷就先設變數拉出來寫

//   return (
//     <>
//       <h1
//         onClick={() => {
//           setTotal(total + 1)
//         }}
//       >
//         {total}
//       </h1>
//       {/* {total > 0 && <p>總數大於0</p>} */}
//       {total > 0 ? <p>總數大於0</p> : ''}
//       {/* {checkAndOutput(total)} */}
//     </>
//   )
// }

function FC() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1
        onClick={() => {
          // setTotal(total + 1) // 非同步，故下方console.log無法得到變動後的值
          // console.log(total)

          // 解法
          const newTotal = total + 1
          setTotal(newTotal)
          console.log(newTotal)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
