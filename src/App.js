import React from 'react'
import Login from './components/Login'
import { useState } from 'react'
import Profile from './components/Profile'
import { LoginContext } from './contexts/LoginContext'
function App() {
  const [name,setName]=useState("")
  const [profileinfo,setProfileInfo]=useState(false)
  return (
    <div>
      <LoginContext.Provider value={{name,setName,setProfileInfo}}>
      {profileinfo ? <Profile /> : <Login />}      
      </LoginContext.Provider>
    </div>
  )
}

export default App
