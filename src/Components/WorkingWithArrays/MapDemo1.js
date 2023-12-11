import React from 'react'

function MapDemo1() {
    const courselist=['C','C++','Java','SQL']
  return (
    <div>
        <ol>
            {
                courselist.map((x,i)=>
                    <li key={i}>{x}</li>)
            }
        </ol>
    </div>
  )
}

export default MapDemo1