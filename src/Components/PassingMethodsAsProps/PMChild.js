import React, { Component } from 'react'

export class PMChild extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handler}>Increment</button>
      </div>
    )
  }
}

export default PMChild