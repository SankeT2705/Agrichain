import { useState } from "react"
import React from 'react'

function Search({info,add}) {
    const[id,setId]=useState('')
    const [order,setOrder]=useState({})
    const[flag,setflag]=useState('false')
    const onSearch=(e)=>{
        e.preventDefault()
        setflag('true')
        info.map((p) => {
              if(p.id==id)
              {
                  setOrder(p)
              }
        })
    }
const onAccept=(e)=>{
    e.preventDefault()
    add(order)
    setflag('false')
}
const onDecline=(e)=>
{
    e.preventDefault()
    setflag('false')
}
    let content=(<div className="container-flex">
        <input type="text" className='mt-2 text-center' style={{width:'60%'}} placeholder="Enter Id "onChange={(e)=>{setId(e.target.value)}} />
        <button onClick={onSearch} className="btns">Search</button>
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
              <button className="btn btn-success m-1" onClick={onAccept}>Accept</button>
              <button className="btn btn-danger m-1"onClick={onDecline}>Decline</button>
              </div> 
      </div>)
    }
    else
    {
        content=(<div>
            <input type="text" className='m-1' style={{width:'60%'}} placeholder="Enter Id "onChange={(e)=>{setId(e.target.value)}} />
            <button onClick={onSearch} className="btns">Search</button>
        </div>  
        )

    }
  return (
    <div className='container-flex'>
       {content}
    </div>
  )
}

export default Search