import { Component } from 'react'
// 類別型寫法
class CC extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
