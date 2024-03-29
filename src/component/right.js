import React,{useState} from 'react'
import Register from './register'
import Login from './login'
import Profile from './profile'
function Right({user,ut,Info,userData}) {
  const [register,setRegister]=useState('true')
  const [login,setlogin]=useState('false')
  const [profile,setprofile]=useState('false')
  const[utype,setUtype]=useState('Farmer')
  let content= <Register register={setRegister} login={setlogin} profile={setprofile} type={setUtype} userInfo={Info} />
  if(login===true)
  {
 content= <Login login={setlogin} register={setRegister} profile={setprofile}  type={setUtype} userInfo={Info}/>
  }
  
  if(profile===true)
  {
  user(true)
  content=<Profile login={setlogin} u={user} profile={setprofile} data={userData}/> 
  ut(utype) 
  }

  return (
    <div className='container-flex m-0'> 
      {content}
    </div>
  )
}

export default Right