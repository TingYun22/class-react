function ChildA(props) {
  // const { pData } = props
  const { data } = props
  return (
    <>
      <h2>ChildA</h2>
      <p>來自ChildB資料: {data}</p>
    </>
  )
}

export default ChildA
