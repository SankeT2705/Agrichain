import React,{useState} from 'react'
import Search from './search'
import Torder from './torder';
import Aorder from './Aorder';
function Select({data,userData,available,del,trader,addtrader,editfarmer,editquantity,add,editT}) {
  const [data1, setData] = useState([]);
  const addContent = (n) => {
    const update = [...data1, n]
    setData(update)
}

  const Acard=available.map((d) => {
    return <Aorder data={d}  add={addContent} del={del} trader={trader} addtrader={addtrader} userData={userData} editfarmer={editfarmer} editquantity={editquantity}/>
})
  const card = trader.map((d) => {
    return <Torder  data={d} userData={userData} add={add} editT={editT}/>
})
  return (
    <div className='container-flex'>
      <Search  info={available} add={addContent}/>
      <hr/>
      <div className='container row'>
      <p>Available: </p>
      {Acard}
      <hr/>
      <p>Order History: </p>
      {card}
      </div>
  
    </div>
  )
}

export default Select