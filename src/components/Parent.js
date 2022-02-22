// import Child from './Child'
import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [data, setData] = useState('')
  // 給ChildB回傳資料用的狀態，透過callback function傳給Parent
  return (
    <>
      <h2>Parent</h2>
      <ChildB setData={setData} />
      <ChildA data={data} />
      {/* 來自另一子女元件的資料 */}
    </>
  )
}

export default Parent
