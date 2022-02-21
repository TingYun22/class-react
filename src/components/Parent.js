import Child from './Child'

function Parent() {
  return (
    <>
      <Child text="hello" name="Adam" />
      <br />
      {/* <Child text={123} name={true} /> */}
      <br />
      <Child />
    </>
  )
}

export default Parent
