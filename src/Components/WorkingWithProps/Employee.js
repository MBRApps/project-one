import React, { Component } from 'react'
export class Employee extends Component {
  render() {
    return (
      <div>
        <h1>
            Id:{this.props.id} <br/>
            Name:{this.props.name} <br/>
            Salary:{this.props.salary} <br/>
            {this.props.children}
        </h1>
      </div>
    )  }
}

export default Employee