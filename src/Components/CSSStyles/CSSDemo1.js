import React, { Component } from 'react'
import './mystyles.css'

export class CSSDemo1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         status:true
      }
    }
  render() {
    const cssClassName=this.state.status?'success':'error'
    return (
      <>
        <div id='main'>
            <div id='d1' className={cssClassName}>            
            </div> 
            <div id='d2'>
                <h1>Hello,User</h1>
            </div>
        </div>
               
      </>
    )
  }
}

export default CSSDemo1