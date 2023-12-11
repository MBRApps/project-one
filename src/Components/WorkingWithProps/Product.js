import React from 'react'
function Product(props) {
  return (
    <div>
        <h1>
            Id:{props.id} <br/>
            Name:{props.name} <br/>
            Price:{props.price}<br/>
            {props.children}
        </h1>
    </div>
  )
}
export default Product