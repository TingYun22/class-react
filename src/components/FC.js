import { useState } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  // const checkAndOutput = (value) => {
  //   if (value > 0) {
  //     return <p>總數大於0</p>
  //   } else {
  //     return <p></p>
  //   }
  // }
  // 複雜判斷就先設變數拉出來寫

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      {/* {total > 0 && <p>總數大於0</p>} */}
      {total > 0 ? <p>總數大於0</p> : ''}
      {/* {checkAndOutput(total)} */}
    </>
  )
}

export default FC
