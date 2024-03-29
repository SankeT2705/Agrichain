import { useState } from "react"
import React from 'react'

function Profile({login,u,profile,data}) {
  const onLogout=(e)=>{
    e.preventDefault()
    login(true)
    profile(false)
    u(false)
  }
  return (
        <div  className="card shadow profile p-0" style={{backgroundColor:'#faf7f7',width: '100%'}}>

        <img className="m-auto border mt-1 mb-2" src='https://www.shutterstock.com/image-vector/man-icon-vector-250nw-1040084344.jpg' style={{height:'150px',width:'150px'}} alt='profilepic'/>
        <div className='m-2 mt-3'>
        <p>User Id: {data.userid} </p>
        <hr/>
        <p>Role: {data.role} </p>
        <hr/>
        <p>Name: {data.name} </p>
        <hr/>
        <p>Email: {data.email} </p>
        <hr/>
        <p>Mobile: {data.mobile} </p>
        <hr/>
        <p>Age: {data.age} </p>
        </div>
        <div className='container text-center'>
        <button type="submit" onClick={onLogout}  className="m-auto mt-1 mb-1 btns text-light" style={{width:'25%'}}>Logout</button>
          
        </div>
     

    </div>
  )
}

export default Profile