// import Child from './Child'
import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [pData, setPData] = useState('Parent')

  const [data, setData] = useState('')
  // 給ChildB回傳資料用的狀態，透過callback function傳給Parent
  return (
    <>
      <h2>Parent</h2>
      <p>來自ChildB的資料: {data}</p>
      <ChildB setData={setData} />
      <ChildA pData={pData} />
    </>
  )
}

export default Parent
