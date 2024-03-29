import React,{useState} from 'react'
import Form from './form'
import Card from './card'
function Create({add,data,userData}) {
  const onCreate=(e)=>{
    e.preventDefault()
    setflag('true')
  }
  let content=<button onClick={onCreate} className='btns m-1 text-light'>Create</button>
  const [flag,setflag]=useState('false')
  if(flag==='true')
  {
    content=<Form  add={add} flag={setflag} userData={userData}/>
  }else{
    content=<button onClick={onCreate}  className='btns m-1 text-light'>Create</button>
  }
const card = data.map((d) => {
    if(d.farmer_name===userData.name)
    {
      return <Card key={d.id} data={d}/>
    }
 
})
console.log(data)
  return (
    <div className='container-flex'>
      {content}
      <hr/>
      <div className='container row'>
        {card}
      </div>
    
    </div>
  )
}

export default Create