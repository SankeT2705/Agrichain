import React from 'react'
import Home from './home'
import User from './user'
function Working({user,ut,add,data,userData,available,del,trader,addtrader,editfarmer,editquantity,editT}) {
  let content=  <Home/>
  if(user===true)
  {
    content=<User type={ut} add={add} data={data} userData={userData} available={available} del={del} trader={trader} addtrader={addtrader} editfarmer={editfarmer} editquantity={editquantity}editT={editT}/>
  }
  return (
    <div className='container-flex'>
      {content}
    </div>
  )
}

export default Working