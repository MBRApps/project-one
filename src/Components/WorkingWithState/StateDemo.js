import React, { Component } from 'react'

export class StateDemo extends Component {
  constructor(props) {
    super(props)  
    this.state = {
       userid:'Guest'
    }
  }
  changeUserId=()=>
  {
    var uid= prompt('Enter UserID')
     this.setState({userid:uid})
  }

  render() {
    return (
      <div>
        <h1>Welcome,{this.state.userid}</h1>
        <button onClick={this.changeUserId}>Change UserId</button>
      </div>
    )
  }
}

export default StateDemo