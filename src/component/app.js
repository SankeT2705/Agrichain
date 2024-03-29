import React from 'react'
import Navbar from './navbar'
import Working from './working'
import Right from './right'
import { useState } from 'react'
function App() {
  const [user,setUser]=useState(false)
  const [ut,setut]=useState('')

  const [info,setinfo]=useState({})

  const [data, setData] = useState([]);
  const addContent = (n) => {
    const update = [...data, n]
    setData(update)
}
// const [trader,setTrader] = useState([]);
//   const addtraderContent = (n) => {
//     const update = [...trader, n]
//     setTrader(update)
// }
let [available,setAvailable]=useState([])
available=[...data]
const [trader, setTrader] = useState([]);
const addTraderContent = (n) => {
  const update = [...trader, n]
  setTrader(update)
}
const editfarmer = (id,newfarmer) => {
  const updatedata = data.map((user) => {
      if (user.id === id) {
          return { ...user, farmer_name: newfarmer }
      }
      return user;
  });
  setData(updatedata);
}
const editquantity = (id,newQnt) => {
  const updatedata = data.map((user) => {
      if (user.id === id) {
          return { ...user, weight: newQnt }
      }
      return user;
  });
  setData(updatedata);
}

const editTarderquantity = (id,newQnt) => {
  const updatedata = trader.map((user) => {
      if (user.id === id) {
          return { ...user, weight: newQnt }
      }
      return user;
  });
  setTrader(updatedata);
}
const del=(id)=>{
  const index = available.findIndex(obj => obj.id === id); 
  if (index !== -1) {
      available.splice(index, 1); 
  }
}

localStorage.setItem("availale",data)
  return (
    <div className='container-flex'>
        <div className='container-flex header'>     
        </div>
        <Navbar/>
        <hr/>
        <div className='row m-1'style={{height:"80vh",minHeight:"80vh"}}>
            <div className='col border mx-1 p-0' style={{minWidth:"70%"}}>
            <Working user={user} ut={ut} add={addContent} data={data} userData={info} available={available} del={del} trader={trader} addtrader={addTraderContent} editfarmer={editfarmer} editquantity={editquantity} editT={editTarderquantity}/>
            </div>
            <div className='col p-0 mx-1'>
            <Right user={setUser} ut={setut} Info={setinfo} userData={info} />
            </div>
        </div>

       
    </div>
  )
}

export default App