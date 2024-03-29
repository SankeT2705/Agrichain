import { useState } from "react"
import React from 'react'

function Tracker({data}) {
    const[id,setId]=useState('')
    const [order,setOrder]=useState({})
    const[flag,setflag]=useState('false')
    const onSearch=(e)=>{

        e.preventDefault()
        setflag('true')
        data.map((p) => {
              if(p.id===id)
              {
                  setOrder(p)
              }
        })
    }
const onAccept=(e)=>{
    e.preventDefault()
    setflag('false')
}
 
    let content=(<div className="container-flex">
        <input type="text" className='mt-2 text-center' style={{width:'60%'}} placeholder="Enter Product Id "onChange={(e)=>{setId(e.target.value)}} />
        <button onClick={onSearch} className="btns"></button>
    </div>  
    )
    if(flag==='true')
    {
      content=( <div  className="container-flex card shadow profile p-0 " style={{backgroundColor:'#faf7f7',width: '100%'}}>
      <div className='m-2 mt-3'>
      <p>Id: {order.id} </p>
      <hr/>
      <p>Farmer Name: {order.farmer_name} </p>
      <hr/>
      <p>Product Name: {order.product_name} </p>
      <hr/>
      <p>Price: {order.price} </p>
      </div>
              <div className="m-auto m-1">
              <button className="btn btn-success m-1" onClick={onAccept}>Close</button>
               
              </div> 
      </div>)
    }
    else
    {
        content=(<div>
            <input type="text" className='m-1' style={{width:'60%'}} placeholder="Enter Product Id "onChange={(e)=>{setId(e.target.value)}} />
            <button onClick={onSearch} className="btns text-light">Track</button>
        </div>  
        )

    }
  return (
    <div className='container-flex'>
       {content}
    </div>
  )
}

export default Tracker