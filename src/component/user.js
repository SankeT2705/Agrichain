import React,{useState}from 'react'
import Create from './create'
import Track from './track'
import Select from './select'

function User({type,add,data,userData,available,del,trader,addtrader,editfarmer,editquantity,editT}) {
    let content=<Create/>
    
    if(type==='Farmer')
    {
        content=<Create add={add} data={data} userData={userData}/>
    }
    else if(type==='Consumer')
    {
        content=<Track data={data}/>
    }
    else
    {
        content=<Select data={data} userData={userData} available={available} del={del} trader={trader} addtrader={addtrader} editfarmer={editfarmer} editquantity={editquantity} add={add} editT={editT}/>
    }
  return (
    <div className='container-flex'>
    {content}
    </div>
  )
}

export default User