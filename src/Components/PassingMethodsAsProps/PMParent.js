import React, { Component } from 'react'
import PMChild from './PMChild'

export class PMParent extends Component {
    constructor(props) {
      super(props)   
      this.state={counter:0} 
      this.increment=this.increment.bind(this)  
    }
    increment()
    {
        this.setState({counter:this.state.counter+1})
    }
  render() {
    return (
      <div>
        <h1>Count:{this.state.counter}</h1>
        <PMChild handler={this.increment}/>
      </div>
    )
  }
}

export default PMParent