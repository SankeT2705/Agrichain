import React,{useState} from 'react'

function Torder({data,userData,add,editT}) {
    const [qnt,setqnt]=useState()
    const [price,setPrice]=useState()
    const Info={
      id:'',farmer_name:'',product_name:'',weight:'',price:'',description:data.description,
    }
    const sell=(e)=>{
    e.preventDefault()
       let name=data.farmer_name+", "+userData.name
       let newQunty=data.weight-qnt
       let newPrice=price
      Info.id=data.id+"-"+Math.round(Math.random() * 1000)
      Info.farmer_name=name
      Info.product_name=data.product_name
      Info.weight=qnt
      Info.price=newPrice
       add(Info)
       editT(data.id,newQunty)
       console.log(data)
       console.log(userData)
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
    <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Price'/>
    <input type="button" className='btn btn-success m-1' onClick={sell} value="Sell"/>
     
    </div>
    </div>
  )
}

export default Torder