import React from 'react'

function Result({key,data}) {
  return (
    <div  className="card shadow profile p-0  m-3 col-6" style={{backgroundColor:'#faf7f7',width: '40%'}}>
    <div className='m-2 mt-3'>
    <p>Id: {data.id} </p>
    <hr/>
    <p>Farmer Name: {data.Farmer_name} </p>
    <hr/>
    <p>Product Name: {data.Product_name} </p>
    <hr/>
    <p>Weight: {data.Product_Weight} </p>
    <hr/>
    <p>Price: {data.Product_price} </p>
    <hr/>
    <p>Description: {data.Product_Description} </p>
     
    </div>
    </div>
  )
}

export default Result