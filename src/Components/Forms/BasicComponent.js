import React, { Component } from 'react'

export class BasicComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         mobile:'',
         city:''
      }
    }
    changeHandlerName=(event)=>{
            //console.log(event.target.value)
            this.setState({name:event.target.value})
    }
    changeHandlerMobile=(event)=>{
        //console.log(event.target.value)
        this.setState({mobile:event.target.value})
}
changeHandlerCity=(event)=>{
    //console.log(event.target.value)
    this.setState({city:event.target.value})
}
submitHandler=(e)=>{
    e.preventDefault();
    console.log(this.state)
}
  render() {
    const{name,city,mobile}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <input type="text" id="txtName" name="txtName"
             placeholder='Enter Name Here' defaultValue={name} 
             onChange={this.changeHandlerName}/>

            <br/>
            
            <input type="text" id="txtMobile" name="txtMobile"
             placeholder='Enter Mobile No. Here' defaultValue={mobile} 
             onChange={this.changeHandlerMobile}/>

            <br/>
             <select id='ddlCity' name='ddlCity' defaultValue={city}
              onChange={this.changeHandlerCity}>
                <option value="">--select--</option>
                <option value="HYD">Hyderabad</option>
                <option value="DEL">Delhi</option>
                <option value="CHN">Chennai</option>
             </select>
             <br/>
             <input type="reset"/>
             <input type="submit"/>

        </form>
      </div>
    )
  }
}

export default BasicComponent