import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
//import { useState } from 'react'
function Login() {
    const {setName,setProfileInfo}=useContext(LoginContext)
//    const [name,setName]=useState("")
//    const [pwd,setPwd]=useState("")
//    const [profileinfo,setProfileInfo]=useState(false)
    // const show=()=>{
    //     if (name==="gowthaman" && pwd==="admin@123")
    //     setProfileInfo(true)
    //     else
    //     setProfileInfo(false)
    // }
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter User Name..'></input>
      <br></br>
      <input type="password" placeholder='Enter Password...'></input>
      <br></br>
      <input type="button" onClick={()=>setProfileInfo(true)} value="Login"></input>
      <br></br>
        {/* {(profileinfo && "Valid User : "+name+"!") || "Invalid User!!!!"} */}
    </div>
  )
}

export default Login
