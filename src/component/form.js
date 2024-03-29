import React from 'react'

function Form({add,flag,userData}) {
    const Info={
        id:'',farmer_name:userData.name,product_name:'',weight:'',price:'',description:'',
      }
      Info.id=Math.round(Math.random() * 1000)
      const onSubmit=(e)=>{
        e.preventDefault() 
        add(Info)
        flag('false')
      }
  return (
<div className='container-flex border profile card '>     
  <div class="card-header">
    Product Info
  </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <label>Product Name: </label>
    <input type="text" onChange={(e)=>{Info.product_name=e.target.value}} className='form-control'/>
    </li>
    <li class="list-group-item"> <label>Product Weight: </label>
        <input type="number"onChange={(e)=>{Info.weight=e.target.value}} className='form-control'/></li>
    <li class="list-group-item"> <label>Product Price: </label>
        <input type="number" onChange={(e)=>{Info.price=e.target.value}} className='form-control'/></li>
    <li class="list-group-item"><label>Product Decription: </label>
        <textarea type="text" onChange={(e)=>{Info.description=e.target.value}} className='form-control'/></li>
  </ul>
  <button className='btns m-auto mt-1 mb-1 text-light' onClick={onSubmit}>Submit</button>
</div>
  )
}

export default Form