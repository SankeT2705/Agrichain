import React,{useState}from 'react'

function Aorder({data,add,del,trader,addtrader,userData,editquantity}) {
  const Info={
    id:data.id,farmer_name:data.farmer_name,product_name:data.product_name,weight:data.weight,price:data.price,description:data.description,
  }
  const [qnt,setqnt]=useState(0)
   
   const addData=(e)=>{
    e.preventDefault()
    let newQunty=data.weight-qnt
    editquantity(data.id,newQunty)
    Info.weight=qnt
    addtrader(Info)
    add(data)
    del(data.id)

    console.log(trader)
   }
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
    <input type="number" value={qnt} onChange={(e)=>{setqnt(e.target.value)}} placeholder='Enter Quantity'/>
    <input type="button" className='btn btn-success m-1' onClick={addData} value="Accept"/>
    </div>
    </div>
  )
}

export default Aorder