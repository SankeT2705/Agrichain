import React from 'react'

function Order({data}) {
  return (
    <div  className="card shadow profile p-0  m-3 col-6" style={{backgroundColor:'#faf7f7',width: '40%'}}>
    <div className='m-2 mt-3'>
    <p>Id: {data.id} </p>
    <hr/>
    <p>Farmer Name: {data.farmer_name} </p>
    <hr/>
    <p>Product Name: {data.product_name} </p>
    <hr/>
    <p>Weight: {data.weight} </p>
    <hr/>
    <p>Price: {data.price} </p>
    <hr/>
    <p>Description: {data.description} </p>
     
    </div>
    </div>
  )
}

export default Order