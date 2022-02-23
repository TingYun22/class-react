import { useState } from 'react'

function ChildB(props) {
  const { setData } = props
  const [childBData, setChildBData] = useState('ChildB')
  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          setData(childBData)
        }}
      >
        Click
      </button>
    </>
  )
}

export default ChildB
