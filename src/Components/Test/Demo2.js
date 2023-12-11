import React, { Component } from 'react'

export class Demo2 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handler}>{this.props.btnText}</button>
      </div>
    )
  }
}

export default Demo2