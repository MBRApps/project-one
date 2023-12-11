import React, { Component } from 'react'

export class ConditionalRender1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedInn:true
      }
    }
  render() {
    if(this.state.isLoggedInn)
    {
        return(
            <div>
                <h1>Welcome Admin</h1>
            </div>
        )
    }
    return(
        <div>
            <h1>Welcome Guest</h1>
        </div>
    )
  }
}

export default ConditionalRender1