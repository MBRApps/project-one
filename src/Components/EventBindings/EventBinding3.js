import React, { Component } from 'react'

export class EventBinding3 extends Component {
    constructor(props) {
      super(props)    
        this.showMsg=this.showMsg.bind(this)
      this.state = {
         name:'Guest'
      }
    }
    showMsg()
    {
       alert('Hi') 
       this.setState({name:'Admin'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.showMsg}>Click Me</button>
      </div>
    )
  }
}
export default EventBinding3