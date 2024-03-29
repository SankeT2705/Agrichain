import React from 'react'
import { useState } from "react"
import axios from 'axios'
function Register({register,login,profile,type,userInfo}) {
  const [info,setInfo]=useState({
    name:'',mobile:'',userid:'',password:'',age:'',email:'',role:'0'
  })
  const onExisting=(e)=>{
          e.preventDefault()
          login(true)
          register(false)
          profile(false)
  }
  const onRegister=(e)=>{
       if(info.role==='0')
       {
        alert('Select Role First')
       }
       else{
        e.preventDefault()
        userInfo(info)
        type(info.role)
        profile(true)
        register(false)
        login(false)
        axios.post('http://localhost:3001/register',info).then(result=>console.log(result)).catch(err=>console.log(err))
       }
  }
  return (
    <div className="container-fluid">
    <div className="row justify-content-center border shadow">
        <div className="col  form-container" style={{backgroundColor:'#faf7f7'}}>
            <label className="form-title mb-2 mt-2 title">
               Register</label>
              
            <form className='text-center'>
                <div className="form-group ">
                
                <select class="form-select" id="inputGroupSelect01" onChange={(e)=>{info.role=e.target.value}}>
                <option selected value='0'>Select Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Trader">Trader</option>
                <option value="Consumer">Consumer</option>
                </select>
                <input type="text"  onChange={(e)=>info.name=e.target.value}   className="form-control my-1" id="name" placeholder="Enter Name"/>
                <input type="text" onChange={(e)=>info.userid=e.target.value}  className="form-control my-1" id="userid" placeholder="Set Userid"/>
                <input type="text" onChange={(e)=>info.email=e.target.value}   className="form-control my-1" id="email" placeholder="Enter Email"/>
                <input type="mobile" onChange={(e)=>info.mobile=e.target.value}  className="form-control my-1" id="mobile" placeholder="Enter  Mobile Number"/>
                <input type="mobile" onChange={(e)=>info.age=e.target.value}  className="form-control my-1" id="age" placeholder="Enter Age"/>
                <input type="password"  onChange={(e)=>info.password=e.target.value} className="form-control my-1" id="pass" placeholder="Enter Password"/>
                </div>

                <button type="submit" onClick={onRegister} className="m-auto mt-1 mb-2 btns text-light" style={{width:'25%'}}>Register</button>
                <button type="submit" onClick={onExisting}  className="mt-1 mb-2 mx-1 btns text-light" style={{width:'30%'}}>Existing User</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Register

 
  