import React, { Component } from 'react'
import Demo2 from './Demo2'

export class Demo1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      this.increment=this.increment.bind(this)
      this.decrement=this.decrement.bind(this)
    }
    increment()
    {
        this.setState({count:this.state.count+1})
    }
    decrement()
    {
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count   }</h1>
        <Demo2 btnText="Increment" handler={this.increment}/>
        <Demo2 btnText="Decrement" handler={this.decrement}/>
      </div>
    )
  }
}

export default Demo1