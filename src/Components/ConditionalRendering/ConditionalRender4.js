import React, { Component } from 'react'

export class ConditionalRender4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedInn:false
      }
    }
  render() {
    return (
        this.state.isLoggedInn &&
      <div>
        <h1>Welcome Admin</h1>
      </div>
    )
  }
}

export default ConditionalRender4