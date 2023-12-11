import React, { Component } from 'react'

export class ConditionalRender2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedInn:true
      }
    }
  render() {
    this.UserId='';
    if(this.state.isLoggedInn){
        this.UserId='Admin'
    }
    else{
        this.UserId='Guest'
    }
    return (
      <div>
        <h1>Welcome,{this.UserId}</h1>
      </div>
    )
  }
}

export default ConditionalRender2