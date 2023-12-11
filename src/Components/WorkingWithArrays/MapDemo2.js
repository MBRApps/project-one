import React from 'react'

function MapDemo2() {
    const courselist=['C','C++','Java','SQL']
  return (
    <div>
        <table className='table table-bordered'>
            <tr className='bg-danger text-white'>
                <th>Id</th>
                <th>Course Title</th>
            </tr>
            {
                courselist.map((x,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{x}</td>
                    </tr>)
            }
        </table>
    </div>
  )
}

export default MapDemo2