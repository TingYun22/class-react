// import Child from './Child'
import { useState } from 'react'
import ChildA from './ChildA'

function Parent() {
  const [pData, setPData] = useState('Parent')

  return (
    <>
      <h2>Parent</h2>
      <ChildA pData={pData} />
    </>
  )
}

export default Parent
