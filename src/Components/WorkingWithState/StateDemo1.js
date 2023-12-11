import React, { Component } from 'react'

export class StateDemo1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }
    increment=()=>{
        this.setState({counter:this.state.counter+1})
    }
  render() {
    return (
      <div>
        Count:{this.state.counter}
        <br/>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default StateDemo1