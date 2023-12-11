import React, { Component } from 'react'

export class ConditionalRender3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedInn:true
      }
    }
  render() {
    return (
        this.state.isLoggedInn?
      <div>
        <h1>Welcome Admin</h1>
      </div>:
      <div>
        <h1>Welcome Guest</h1>
      </div>
    )
  }
}

export default ConditionalRender3