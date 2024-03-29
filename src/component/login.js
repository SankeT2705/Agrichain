import { useState } from "react"
import React from 'react'
import axios from 'axios'
function Login({login,register,profile,type,userInfo}) {
  const User={
    name:'Sanket',mobile:'9359899391',userid:'Sanket27',password:'Sanket123@',age:'21',email:'sanketbobhate07@gmail.com',role:'0'
  }
 
  const [userid,setUserid]=useState('')
  const [password,setPass]=useState('')
  const[t,sett]=useState('0')
  const onLogin=(e)=>{
    
    if(t==='0')
    {
      alert('Select User Type First !')
    }
    else{
      e.preventDefault()
      console.log(userid)
      axios.post('http://localhost:3001/login',userid)
      .then(result=>{
      console.log(result)
      if(result.data==="Success")
      {
        alert("success")
        User.role=t
        login(false)
        register(false)
        profile(true)
        type(t)
        userInfo(User)
      }

    }).catch(err=>console.log(err)) 
    }
  }
  const onNew=(e)=>{
    e.preventDefault()
    register(true)
    login(false)
}
  return (
    <div className="container-fluid"  >
        
    <div className="row justify-content-center border shadow">
        <div className="col  form-container" style={{backgroundColor:'#faf7f7'}}>
            <label className="form-title mb-2 title">
               Login</label>
            <form className='text-center'>
                <div className="form-group ">
                
                <select class="form-select" id="inputGroupSelect01" onChange={(e)=>{sett(e.target.value)}}>
                <option selected value='0'>Select Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Trader">Trader</option>
                <option value="Consumer">Consumer</option>
                </select>
                <input type="text"   className="form-control my-1" id="Userid" onChange={(e)=>{setUserid(e.target.value)}} placeholder="Enter Userid"/>
                <input type="text"   className="form-control my-1" id="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter Password"/>
                </div>
                <button type="submit" onClick={onLogin}  className="m-auto mt-1 mb-1 btns text-light" style={{width:'25%'}}>Login</button>
                <button type="submit" onClick={onNew} className="mt-1 mb-1 mx-1 btns text-light" style={{width:'30%'}}>New User</button>

            </form>
        </div>
    </div>
</div>
  )
}

export default Login