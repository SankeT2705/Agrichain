import React,{useState} from 'react'
import Tracker from './tracker';
import Result from './result';
function Track({data}) {
  
  return (
      <div className='container-flex'>
      <Tracker data={data}/>
      <hr/>
    </div>
  )
}

export default Track